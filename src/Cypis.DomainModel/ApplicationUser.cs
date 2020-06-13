using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Covalition.Cypis.DomainModel
{
    public class ApplicationUser : IdentityUser
    {
        public string CustomTag { get; set; }
    }
}
