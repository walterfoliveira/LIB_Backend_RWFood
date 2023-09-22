using rwfood.data.Context;
using rwfood.domain.Dto;
using rwfood.domain.Entities;
using rwfood.domain.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rwfood.data.Repository
{
    public class RepositoryCustomer : RepositoryBase<CustomerDto, Customer>, IRepositoryCustomer
    {
        public RepositoryCustomer(MySqlDbContext _context) : base(_context)
        {

        }
    }
}
