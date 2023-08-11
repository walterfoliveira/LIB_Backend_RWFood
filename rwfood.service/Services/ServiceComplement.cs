using log4net;
using rwfood.domain.Dto;
using rwfood.domain.Interfaces.Repositories;
using rwfood.domain.Interfaces.Services;

namespace rwfood.service.Services
{
    public class ServiceComplement : ServiceBase<ComplementDto>, IServiceComplement
    {
        readonly IRepositoryComplement repositoryComplement;

        public ServiceComplement(IRepositoryComplement _repositoryComplement, ILog log) : base(_repositoryComplement, log)
        {
            this.repositoryComplement = _repositoryComplement;
        }
    }
}
