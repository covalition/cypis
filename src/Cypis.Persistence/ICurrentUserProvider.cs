using System;
using System.Collections.Generic;
using System.Text;

namespace Covalition.Cypis.Persistence
{
    public interface ICurrentUserProvider
    {
        //Task<ApplicationUser> GetCurrentUser();
        string GetUserId();
    }
}
