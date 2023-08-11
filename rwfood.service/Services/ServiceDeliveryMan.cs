using log4net;
using rwfood.domain.Dto;
using rwfood.domain.Interfaces.Repositories;
using rwfood.domain.Interfaces.Services;

namespace rwfood.service.Services
{
    public class ServiceDeliveryMan : ServiceBase<DeliveryManDto>, IServiceDeliveryMan
    {
        readonly IRepositoryDeliveryMan repositoryDeliveryMan;

        public ServiceDeliveryMan(IRepositoryDeliveryMan _repositoryDeliveryMan, ILog log) : base(_repositoryDeliveryMan, log)
        {
            this.repositoryDeliveryMan = _repositoryDeliveryMan;
        }
    }
}
