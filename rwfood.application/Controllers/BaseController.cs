using log4net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using rwfood.domain.Dto;
using rwfood.domain.Interfaces.Services;
using System.ComponentModel.DataAnnotations;

namespace rwfood.application.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public abstract class BaseController<D> : ControllerBase where D : BaseDTO
    {
        readonly IServiceBase<D> genericService;

        protected readonly ILog logger;
        protected ushort recordsPerRequest;
        protected IConfiguration configuration;

        protected BaseController(IServiceBase<D> _genericService, ILog _logger, IConfiguration _configuration)
        {
            this.logger = _logger;
            this.configuration = _configuration;
            //this.recordsPerRequest = _configuration.GetValue<ushort>("RecordsPerRequest");

            this.genericService = _genericService;
        }

        [HttpGet("{idCompany}")]
        //[Authorize(Roles = "ERP")]
        public virtual async Task<ActionResult<IEnumerable<D>>> Get(int idCompany)
        {
            return await Task.Run(() =>
            {
                //var registros = this.genericService.GetAll(_idCompany, null, null).Count();
                var response = this.genericService.GetAll(idCompany, null, null);
                //var response = this.genericService.GetAll(offset, limit);
                return new ActionResult<IEnumerable<D>>(response);
            });
        }

        [HttpGet("{idCompany}/{id}")]
        //[Authorize(Roles = "ERP")]
        public virtual D GetById(int idCompany, int id)
        {
            return this.genericService.GetById(idCompany, id);
        }

        [HttpPut]
        //[Authorize(Roles = "ERP")]
        public virtual async Task<ActionResult<int>> Put([FromBody] D dtoObject)
        {
            if (dtoObject == null)
                return NotFound();

            return await Task.Run(() =>
            {
                try
                {
                    var id = this.genericService.Update(dtoObject);
                    return new ActionResult<int>(id);
                }
                catch (Exception ex)
                {
                    this.logger.Error($"put object", ex);
                    return base.Problem(ex.Message, null, 500);
                }
            });
        }

        [HttpPost]
        //[Authorize(Roles = "ERP")]
        public virtual async Task<ActionResult<int>> Post([FromBody] D dtoObject)
        {
            if (dtoObject == null)
                return NotFound();

            return await Task.Run(() =>
            {
                try
                {
                    var id = this.genericService.Add(dtoObject);
                    return new ActionResult<int>(id);
                }
                catch (Exception ex)
                {
                    this.logger.Error($"post object", ex);
                    return base.Problem(ex.Message, null, 500);
                }
            });
        }

        [HttpDelete("{idCompany}/{id}")]
        //[Authorize(Roles = "ERP")]
        public virtual async Task<ActionResult<bool>> Delete(int idCompany, int id)
        {
            if (id == 0)
                return NotFound();

            return await Task.Run(() =>
            {
                try
                {
                    return new ActionResult<bool>(this.genericService.Remove(idCompany, id));
                }
                catch (Exception ex)
                {
                    this.logger.Error($"delete id: {id}", ex);
                    return base.Problem(ex.Message, null, 500);
                }
            });
        }
    }
}
