using rwfood.data.Context;
using rwfood.domain.Dto;
using rwfood.domain.Entities;
using rwfood.domain.Interfaces.Repositories;

namespace rwfood.data.Repository
{
    public class RepositoryCategory : RepositoryBase<CategoryDto, Category>, IRepositoryCategory
    {
        public RepositoryCategory(MySqlDbContext _context) : base(_context)
        {

        }
    }
}
