using log4net;
using rwfood.domain.Dto;
using rwfood.domain.Interfaces.Repositories;
using rwfood.domain.Interfaces.Services;

namespace rwfood.service.Services
{
    public class ServiceUsers : ServiceBase<UsersDto>, IServiceUsers
    {
        readonly IRepositoryUsers repositoryUsers;

        public ServiceUsers(IRepositoryUsers _repositoryUsers, ILog log) : base(_repositoryUsers, log)
        {
            this.repositoryUsers = _repositoryUsers;
        }

        public UsersDto GetAuth(string _token)
        {
            return this.repositoryUsers.SelectAuth(_token);
        }

        public UsersDto GetLogin(int _idCompany, string _token, string _email, string _password)
        {
            var entity = this.repositoryUsers.SelectLogin(_idCompany, _email, _password);
            if (entity != null)
            {
                entity.Updated = DateTime.Now;
                entity.TokenJWT = _token;
                this.repositoryUsers.Update(entity);
            }

            return entity;
        }
    }
}
