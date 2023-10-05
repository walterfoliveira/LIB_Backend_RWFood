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
    public class ProductController : BaseController<ProductDto>
    {
        readonly IServiceProduct classeService;
        readonly string nameController;

        public ProductController(IServiceProduct _classeService, ILog _logger, IConfiguration _configuration) : base(_classeService, _logger, _configuration)
        {
            this.classeService = _classeService;
            this.configuration = _configuration;
            this.nameController = System.Reflection.MethodInfo.GetCurrentMethod().DeclaringType.Name;
        }

        [HttpPatch("ProductByCategory")]
        [Authorize(Roles = "ERP")]
        public virtual async Task<ActionResult<IEnumerable<ProductCustomDto>>> GetProductByCategory(int idCompany)
        {
            return await Task.Run(() =>
            {
                var response = this.classeService.GetProdutoCategory(idCompany);
                return new ActionResult<IEnumerable<ProductCustomDto>>(response);
            });
        }
    }
}
