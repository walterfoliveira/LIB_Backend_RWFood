using rwfood.domain.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rwfood.domain.Interfaces.Services
{
    public interface IServiceAuthentication : IServiceBase<AuthenticationDto>
    {
        AuthenticationDto SelectLogin(int _idCompany, string _username, string _password);
    }
}
