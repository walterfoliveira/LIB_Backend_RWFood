using log4net;
using rwfood.domain.Dto;
using rwfood.domain.Interfaces.Repositories;
using rwfood.domain.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rwfood.service.Services
{
    public class ServiceCustomer : ServiceBase<CustomerDto>, IServiceCustomer
    {
        readonly IRepositoryCustomer repositoryCustomer;

        public ServiceCustomer(IRepositoryCustomer _repositoryCustomer, ILog log) : base(_repositoryCustomer, log)
        {
            this.repositoryCustomer = _repositoryCustomer;
        }
    }
}
