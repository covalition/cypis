using Covalition.Cypis.Persistence;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Security.Principal;
using System.Text;

namespace Covalition.Cypis.Services
{
    public class CurrentUserProvider : ICurrentUserProvider
    {
        IHttpContextAccessor _httpContextAccessor;

        public CurrentUserProvider(IHttpContextAccessor httpContextAccessor) {
            _httpContextAccessor = httpContextAccessor;
        }

        public string GetUserId() {

            //principal.FindFirstValue(ClaimsIdentity.UserIdClaimType);
            IPrincipal principal = _httpContextAccessor.HttpContext.User;
            ClaimsIdentity claimsIdentity = (ClaimsIdentity)principal.Identity;
            Claim claim = claimsIdentity.FindFirst(ClaimTypes.NameIdentifier);
            return claim.Value;

            //return 1; // do testów
        }
    }
}
