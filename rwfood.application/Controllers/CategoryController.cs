﻿using log4net;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using rwfood.domain.Dto;
using rwfood.domain.Interfaces.Services;

namespace rwfood.application.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : BaseController<CategoryDto>
    {
        readonly IServiceCategory classeService;
        readonly string nameController;

        public CategoryController(IServiceCategory _classeService, ILog _logger, IConfiguration _configuration) : base(_classeService, _logger, _configuration)
        {
            this.classeService = _classeService;
            this.configuration = _configuration;
            this.nameController = System.Reflection.MethodInfo.GetCurrentMethod().DeclaringType.Name;
        }
    }
}
