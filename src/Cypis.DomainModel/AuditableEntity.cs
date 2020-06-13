using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Covalition.Cypis.DomainModel
{
    public abstract class AuditableEntity
    {
        protected AuditableEntity() {
            Created = Modified = DateTime.Now;
        }

        protected AuditableEntity(bool active = true) : this() {
            Active = active;
        }

        public int Id { get; private set; }

        public bool Active { get; set; } = true;

        [Column(Order = 201)]
        public DateTime Modified { get; set; }

        [Column(Order = 202), Required]
        public virtual ApplicationUser ModifiedBy { get; set; }

        [Column(Order = 203)]
        public DateTime Created { get; set; }


        [Column(Order = 204), Required]
        public virtual ApplicationUser CreatedBy { get; set; }

        public virtual bool CanDelete => true;
    }
}
