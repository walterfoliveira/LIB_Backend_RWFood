using rwfood.domain.Dto;

namespace rwfood.domain.Interfaces.Services
{
    public interface IServiceUsers : IServiceBase<UsersDto>
    {
        UsersDto GetLogin(int _idCompany, string _email, string _password);
    }
}
