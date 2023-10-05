using Newtonsoft.Json;
using rwfood.data.Context;
using rwfood.domain.Dto;
using rwfood.domain.Entities;
using rwfood.domain.Interfaces.Repositories;

namespace rwfood.data.Repository
{
    public class RepositoryUsers : RepositoryBase<UsersDto, Users>, IRepositoryUsers
    {
        public RepositoryUsers(MySqlDbContext _context) : base(_context)
        {

        }

        public UsersDto SelectAuth(string _token)
        {
            var query = this.context.Users.Where(p => p.Status == 1 && p.TokenJWT == _token).FirstOrDefault();
            return JsonConvert.DeserializeObject<UsersDto>(JsonConvert.SerializeObject(query));
        }

        public UsersDto SelectLogin(int _idCompany, string _email, string _password)
        {
            var query = this.context.Users.Where(p => p.Status == 1 && p.IdCompany == _idCompany && p.Mail == _email && p.Pass == _password).FirstOrDefault();
            return JsonConvert.DeserializeObject<UsersDto>(JsonConvert.SerializeObject(query)); 
        }
    }
}
