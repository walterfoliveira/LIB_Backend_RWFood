using log4net;
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

        [HttpGet]
        public virtual async Task<ActionResult<IEnumerable<D>>> Get([Required] int _idCompany, [FromQuery] int? offset, [FromQuery] ushort? limit)
        {
            if (limit == null || limit == 0)
                limit = this.recordsPerRequest;

            if (offset == null)
                offset = 0;

            return await Task.Run(() =>
            {
                //var registros = this.genericService.GetAll(_idCompany, null, null).Count();
                var response = this.genericService.GetAll(_idCompany, null, null);
                //var response = this.genericService.GetAll(offset, limit);
                return new ActionResult<IEnumerable<D>>(response);
            });
        }

        [HttpGet("{id}")]
        public virtual D GetById([Required] int _idCompany, int id)
        {
            return this.genericService.GetById(_idCompany, id);
        }

        [HttpPut]
        public virtual async Task<ActionResult<int>> Put([FromBody] D _dtoObject)
        {
            if (_dtoObject == null)
                return NotFound();

            return await Task.Run(() =>
            {
                try
                {
                    var id = this.genericService.Update(_dtoObject);
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
        public virtual async Task<ActionResult<int>> Post([FromBody] D _dtoObject)
        {
            if (_dtoObject == null)
                return NotFound();

            return await Task.Run(() =>
            {
                try
                {
                    var id = this.genericService.Add(_dtoObject);
                    return new ActionResult<int>(id);
                }
                catch (Exception ex)
                {
                    this.logger.Error($"post object", ex);
                    return base.Problem(ex.Message, null, 500);
                }
            });
        }

        [HttpDelete("{id}")]
        public virtual async Task<ActionResult<bool>> Delete([Required] int _idCompany, int id)
        {
            if (id == 0)
                return NotFound();

            return await Task.Run(() =>
            {
                try
                {
                    return new ActionResult<bool>(this.genericService.Remove(_idCompany, id));
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
