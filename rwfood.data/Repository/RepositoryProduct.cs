using rwfood.data.Context;
using rwfood.domain.Dto;
using rwfood.domain.Entities;
using rwfood.domain.Interfaces.Repositories;

namespace rwfood.data.Repository
{
    public class RepositoryProduct : RepositoryBase<ProductDto, Product>, IRepositoryProduct
    {
        public RepositoryProduct(MySqlDbContext _context) : base(_context)
        {

        }
    }
}
