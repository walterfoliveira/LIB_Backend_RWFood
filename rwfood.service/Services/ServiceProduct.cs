using log4net;
using rwfood.domain.Dto;
using rwfood.domain.Interfaces.Repositories;
using rwfood.domain.Interfaces.Services;

namespace rwfood.service.Services
{
    public class ServiceProduct : ServiceBase<ProductDto>, IServiceProduct
    {
        readonly IRepositoryProduct repositoryProduct;

        public ServiceProduct(IRepositoryProduct _repositoryProduct, ILog log) : base(_repositoryProduct, log)
        {
            this.repositoryProduct = _repositoryProduct;
        }
    }
}
