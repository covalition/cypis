using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Covalition.Cypis.DomainModel;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace Covalition.Cypis.Persistence
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        ICurrentUserProvider _userIdProvider;

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options, ICurrentUserProvider userIdProvider)
            : base(options) {
            _userIdProvider = userIdProvider;
        }

        public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default) {
            var entities = ChangeTracker.Entries()
                .Where(x => x.Entity is AuditableEntity
                    && (x.State == EntityState.Added || x.State == EntityState.Modified));
            if (entities.Any()) {
                ApplicationUser currentUser = Users.Find(_userIdProvider.GetUserId());
                if (currentUser == null)
                    throw new Exception("Current user is undefined.");
                foreach (EntityEntry entity in entities) {
                    AuditableEntity auditableEntity = (AuditableEntity)entity.Entity;
                    DateTime time = DateTime.Now;
                    if (entity.State == EntityState.Added) {
                        //auditableEntity.Created = time;
                        //auditableEntity.CreatedBy = currentUser;
                        auditableEntity.SetAuditFieldsOnCreate(time, currentUser);
                    }
                    // dodany i zmodyfikowany
                    //auditableEntity.Modified = time;
                    //auditableEntity.ModifiedBy = currentUser;
                    auditableEntity.SetAuditFieldsOnModify(time, currentUser);
                }
            }

            return base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
        }

        //public override int SaveChanges() {
        //    var entities = ChangeTracker.Entries()
        //        .Where(x => x.Entity is AuditableEntity
        //            && (x.State == EntityState.Added || x.State == EntityState.Modified));
        //    if (entities.Any()) {
        //        ApplicationUser currentUser = Users.Find(_userIdProvider.GetUserId());
        //        if (currentUser == null)
        //            throw new Exception("Current user is undefined.");
        //        foreach (EntityEntry entity in entities) {
        //            AuditableEntity auditableEntity = (AuditableEntity)entity.Entity;
        //            DateTime time = DateTime.Now;
        //            if (entity.State == EntityState.Added) {
        //                auditableEntity.Created = time;
        //                auditableEntity.CreatedBy = currentUser;
        //            }
        //            // dodany i zmodyfikowany
        //            auditableEntity.Modified = time;
        //            auditableEntity.ModifiedBy = currentUser;
        //        }
        //    }
        //    return base.SaveChanges();
        //}

        public virtual DbSet<DomainModel.Task> Tasks { get; set; }

        protected override void OnModelCreating(ModelBuilder builder) {
            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);

            builder.Entity<DomainModel.Task>() // TODO: sprawdzić Auditable
                .HasOne(t => t.CreatedBy)
                .WithMany()
                .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<DomainModel.Task>()
                .HasOne(t => t.ModifiedBy)
                .WithMany()
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
