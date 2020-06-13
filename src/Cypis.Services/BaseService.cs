using Covalition.Cypis.Persistence;
using System;
using System.Collections.Generic;
using System.Text;

namespace Covalition.Cypis.Services
{
    public abstract class BaseService
    {
        protected ApplicationDbContext DbContext;

        protected BaseService(ApplicationDbContext dbContext) {
            DbContext = dbContext;
        }
    }
}
