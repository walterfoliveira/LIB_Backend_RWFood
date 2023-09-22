using rwfood.domain.Dto;

namespace rwfood.domain.Interfaces.Repositories
{
    public interface IRepositoryProduct : IRepository<ProductDto>
    {
        IEnumerable<ProductCustomDto> SelectProdutoCategory(int _idCompany);
    }
}
