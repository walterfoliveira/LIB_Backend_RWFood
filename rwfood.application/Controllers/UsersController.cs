using log4net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using rwfood.domain.Dto;
using rwfood.domain.Interfaces.Services;

namespace rwfood.application.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : BaseController<UsersDto>
    {
        readonly IServiceUsers classeService;
        readonly string nameController;

        public UsersController(IServiceUsers _classeService, ILog _logger, IConfiguration _configuration) : base(_classeService, _logger, _configuration)
        {
            this.classeService = _classeService;
            this.configuration = _configuration;
            this.nameController = System.Reflection.MethodInfo.GetCurrentMethod().DeclaringType.Name;
        }

        [HttpPost("Login")]
        [Authorize(Roles = "ERP")]
        public virtual async Task<ActionResult<UsersDto>> PostLogin([FromBody] UserLogin userLogin)
        {
            var token = Request.Headers.Authorization.Count() > 0 ?
                                    (Request.Headers.Authorization).ToString().Replace("Bearer ", string.Empty) : string.Empty;

            return await Task.Run(() =>
            {
                var response = this.classeService.GetLogin(userLogin.IdCompany, token, userLogin.Mail, userLogin.Password);
                return new ActionResult<UsersDto>(response);
            });
        }

        [HttpPost("Auth")]
        [Authorize(Roles = "ERP")]
        public virtual async Task<ActionResult<UsersDto>> PostUserAuth([FromBody] UserAuth userAuth)
        {
            return await Task.Run(() =>
            {
                var response = this.classeService.GetAuth(userAuth.Token);
                return new ActionResult<UsersDto>(response);
            });
        }


    }

    public class UserLogin : BaseDTO
    {
        public string Mail { get; set; }
        public string Password { get; set; }
    }

    public class UserAuth
    {
        public string Token { get; set; }
    }

}
