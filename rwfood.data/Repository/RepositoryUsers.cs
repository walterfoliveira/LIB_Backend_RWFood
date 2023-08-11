using rwfood.data.Context;
using rwfood.domain.Dto;
using rwfood.domain.Entities;
using rwfood.domain.Interfaces.Repositories;

namespace rwfood.data.Repository
{
    public class RepositoryUsers : RepositoryBase<UsersDto, Users>, IRepositoryUsers
    {
        public RepositoryUsers(MySqlDbContext _context) : base(_context)
        {

        }
    }
}
