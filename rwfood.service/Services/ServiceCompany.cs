using log4net;
using rwfood.domain.Dto;
using rwfood.domain.Interfaces.Repositories;
using rwfood.domain.Interfaces.Services;

namespace rwfood.service.Services
{
    public class ServiceCompany : ServiceBase<CompanyDto>, IServiceCompany
    {
        readonly IRepositoryCompany repositoryCompany;

        public ServiceCompany(IRepositoryCompany _repositoryCompany, ILog log) : base(_repositoryCompany, log)
        {
            this.repositoryCompany = _repositoryCompany;
        }
    }
}
