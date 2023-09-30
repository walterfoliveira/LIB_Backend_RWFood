using Newtonsoft.Json;
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
    public class RepositoryAuthentication : RepositoryBase<AuthenticationDto, Authentication>, IRepositoryAuthentication
    {
        public RepositoryAuthentication(MySqlDbContext _context) : base(_context)
        {

        }

        public AuthenticationDto SelectLogin(int _idCompany, string _username, string _password)
        {
            var query = this.context.Authentication.Where(p => p.IdCompany == _idCompany && p.UserName == _username && p.PassWord == _password).FirstOrDefault();
            return JsonConvert.DeserializeObject<AuthenticationDto>(JsonConvert.SerializeObject(query));
        }
    }
}
