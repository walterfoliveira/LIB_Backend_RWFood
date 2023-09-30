using log4net;
using rwfood.domain.Dto;
using rwfood.domain.Interfaces.Repositories;
using rwfood.domain.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rwfood.service.Services
{
    public class ServiceAuthentication : ServiceBase<AuthenticationDto>, IServiceAuthentication
    {
        readonly IRepositoryAuthentication repositoryAuthentication;

        public ServiceAuthentication(IRepositoryAuthentication _repositoryAuthentication, ILog log) : base(_repositoryAuthentication, log)
        {
            this.repositoryAuthentication = _repositoryAuthentication;
        }

        public AuthenticationDto SelectLogin(int _idCompany, string _username, string _password)
        {
            return this.repositoryAuthentication.SelectLogin(_idCompany, _username, _password);
        }
    }
}
