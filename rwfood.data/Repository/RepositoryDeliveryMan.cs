using rwfood.data.Context;
using rwfood.domain.Dto;
using rwfood.domain.Entities;
using rwfood.domain.Interfaces.Repositories;

namespace rwfood.data.Repository
{
    public class RepositoryDeliveryMan : RepositoryBase<DeliveryManDto, DeliveryMan>, IRepositoryDeliveryMan
    {
        public RepositoryDeliveryMan(MySqlDbContext _context) : base(_context)
        {

        }
    }
}
