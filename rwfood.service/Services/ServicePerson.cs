using log4net;
using rwfood.domain.Dto;
using rwfood.domain.Interfaces.Repositories;
using rwfood.domain.Interfaces.Services;

namespace rwfood.service.Services
{
    public class ServicePerson : ServiceBase<PersonDto>, IServicePerson
    {
        readonly IRepositoryPerson repositoryPerson;

        public ServicePerson(IRepositoryPerson _repositoryPerson, ILog log) : base(_repositoryPerson, log)
        {
            this.repositoryPerson = _repositoryPerson;
        }
    }
}
