using log4net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Org.BouncyCastle.Asn1.Ocsp;
using rwfood.domain.Dto;
using rwfood.domain.Interfaces.Services;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace rwfood.application.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController :  ControllerBase
    {
        readonly IServiceAuthentication classeService;
        readonly IConfiguration configuration;
        readonly string nameController;

        

        public AuthenticationController(IServiceAuthentication _classeService, ILog _logger, IConfiguration _configuration)
        {
            this.classeService = _classeService;
            this.configuration = _configuration;
            this.nameController = System.Reflection.MethodInfo.GetCurrentMethod().DeclaringType.Name;
        }

        [HttpPost]
        [Route("login")]
        [AllowAnonymous]
        public async Task<ActionResult<dynamic>> Authenticate(UserAuth userAuth)
        {
            try
            {
                if (string.IsNullOrEmpty(userAuth.UserName) || string.IsNullOrEmpty(userAuth.PassWord))
                {
                    //GravaLog.Logar($"", "Em branco", "Authenticate", IpRequest, "", "", _contextApp);
                    return Unauthorized(new { message = "Usuário ou senha inválidos" });
                }

                var userAuthentication = classeService.SelectLogin(userAuth.IdCompany, userAuth.UserName, userAuth.PassWord);

                if (userAuthentication == null)
                {
                    //GravaLog.Logar(JsonSerializer.Serialize(model), "Usuário ou senha inválidos", "Authenticate", IpRequest, model.Username, "", _contextApp);
                    return Unauthorized(new { message = "Usuário ou senha inválidos" });
                }

                var tokenAuth = GenerateToken(userAuthentication.UserName, userAuthentication.Role);

                //var retorno = new
                //{
                //    user = userAuthentication,
                //    token = tokenAuth
                //};

                //GravaLog.Logar("", "OK", "Authenticate", IpRequest, model.Username, "", _contextApp);

                return Ok(new { user = userAuthentication, token = tokenAuth });


            }
            catch (Exception ex)
            {
                //_logger.LogError(new Random().Next(), ex, "Método GetTickets {0}", DateTime.Now);
                return BadRequest();
            }




        }

        public static string GenerateToken(string userName, string role)
        {
            string Secret = "EVRfedaf7d8863b48e197b9287d492b708eRW";
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, userName.ToString()),
                    new Claim(ClaimTypes.Role, role.ToString())
                }),
                Expires = role != "hangfire" ? DateTime.UtcNow.AddHours(2) : DateTime.UtcNow.AddYears(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }

    public class UserAuth: BaseDTO
    {
        public string UserName { get; set; }
        public string PassWord { get; set; }        
    }

}
