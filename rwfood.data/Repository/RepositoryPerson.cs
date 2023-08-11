using rwfood.data.Context;
using rwfood.domain.Dto;
using rwfood.domain.Entities;
using rwfood.domain.Interfaces.Repositories;

namespace rwfood.data.Repository
{
    public class RepositoryPerson : RepositoryBase<PersonDto, Person>, IRepositoryPerson
    {
        public RepositoryPerson(MySqlDbContext _context) : base(_context)
        {

        }
    }
}
