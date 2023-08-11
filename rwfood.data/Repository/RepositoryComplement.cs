using rwfood.data.Context;
using rwfood.domain.Dto;
using rwfood.domain.Entities;
using rwfood.domain.Interfaces.Repositories;

namespace rwfood.data.Repository
{
    public class RepositoryComplement : RepositoryBase<ComplementDto, Complement>, IRepositoryComplement
    {
        public RepositoryComplement(MySqlDbContext _context) : base(_context)
        {

        }
    }
}
