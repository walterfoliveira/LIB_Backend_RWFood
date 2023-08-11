using log4net;
using rwfood.domain.Dto;
using rwfood.domain.Interfaces.Repositories;
using rwfood.domain.Interfaces.Services;

namespace rwfood.service.Services
{
    public class ServiceUsers : ServiceBase<UsersDto>, IServiceUsers
    {
        readonly IRepositoryUsers repositoryUsers;

        public ServiceUsers(IRepositoryUsers _repositoryUsers, ILog log) : base(_repositoryUsers, log)
        {
            this.repositoryUsers = _repositoryUsers;
        }
    }
}
