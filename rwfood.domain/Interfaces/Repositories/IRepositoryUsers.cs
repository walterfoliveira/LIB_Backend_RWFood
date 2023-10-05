using rwfood.domain.Dto;

namespace rwfood.domain.Interfaces.Repositories
{
    public interface IRepositoryUsers : IRepository<UsersDto>
    {
        UsersDto SelectLogin(int _idCompany, string _email, string _password);
        UsersDto SelectAuth(string _token);
    }
}
