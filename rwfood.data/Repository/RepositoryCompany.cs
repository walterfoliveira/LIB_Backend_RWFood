using rwfood.data.Context;
using rwfood.domain.Dto;
using rwfood.domain.Entities;
using rwfood.domain.Interfaces.Repositories;

namespace rwfood.data.Repository
{
    public class RepositoryCompany : RepositoryBase<CompanyDto, Company>, IRepositoryCompany
    {
        public RepositoryCompany(MySqlDbContext _context) : base(_context)
        {

        }
    }
}
