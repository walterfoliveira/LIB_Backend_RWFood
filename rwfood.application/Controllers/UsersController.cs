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

        [HttpGet("{idCompany}/{mail}/{password}")]
        [Authorize(Roles = "ERP")]
        public virtual async Task<ActionResult<UsersDto>> GetLogin(int idCompany,string mail, string password)
        {
            return await Task.Run(() =>
            {
                var response = this.classeService.GetLogin(idCompany, mail, password);
                return new ActionResult<UsersDto>(response);
            });
        }


    }
}
