using log4net;
using rwfood.domain.Dto;
using rwfood.domain.Interfaces.Repositories;
using rwfood.domain.Interfaces.Services;

namespace rwfood.service.Services
{
    public class ServiceCategory : ServiceBase<CategoryDto>, IServiceCategory
    {
        readonly IRepositoryCategory repositoryCategory;

        public ServiceCategory(IRepositoryCategory _repositoryCategory, ILog log) : base(_repositoryCategory, log)
        {
            this.repositoryCategory = _repositoryCategory;
        }
    }
}
