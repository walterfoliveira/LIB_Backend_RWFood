using rwfood.domain.Dto;

namespace rwfood.domain.Interfaces.Services
{
    public interface IServiceProduct : IServiceBase<ProductDto>
    {
        IEnumerable<ProductCustomDto> GetProdutoCategory(int _idCompany);
    }
}
