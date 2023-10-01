using log4net;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using rwfood.data.Context;
using rwfood.data.Repository;
using rwfood.domain.Interfaces.Repositories;
using rwfood.domain.Interfaces.Services;
using rwfood.service.Services;
using System.Configuration;
using System.Text;

[assembly: log4net.Config.XmlConfigurator(ConfigFile = "log4net.config")]

var builder = WebApplication.CreateBuilder(args);
var Configuration = builder.Configuration;
var Logger = LogManager.GetLogger(typeof(ILog));
builder.Services.AddSingleton(typeof(ILog), Logger);
Logger.Info("Starting api [startup:ConfigureServices]. Adding policies...");

//context
builder.Services.AddDbContext<MySqlDbContext>(options =>
{
    var server = Configuration["database:mysql:server"];
    var port = Configuration["database:mysql:port"];
    var database = Configuration["database:mysql:database"];
    var username = Configuration["database:mysql:username"];
    var password = Configuration["database:mysql:password"];

    var serverVersion = new MySqlServerVersion(new Version(8, 0, 27));

    options.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
    options.UseLoggerFactory(LoggerFactory.Create(builder => builder.AddDebug()));
    options.EnableSensitiveDataLogging().EnableDetailedErrors();

    options.UseMySql($"Server={server};Port={port};Database={database};Uid={username};Pwd={password}", serverVersion, opt =>
    {
        opt.CommandTimeout(180);
        opt.EnableRetryOnFailure(5);
    });
});


// Add services to the container.

//Repopistory            
builder.Services.AddScoped<IRepositoryCompany, RepositoryCompany>();
builder.Services.AddScoped<IRepositoryCategory, RepositoryCategory>();
builder.Services.AddScoped<IRepositoryComplement, RepositoryComplement>();
builder.Services.AddScoped<IRepositoryPerson, RepositoryPerson>();
builder.Services.AddScoped<IRepositoryProduct, RepositoryProduct>();
builder.Services.AddScoped<IRepositoryUsers, RepositoryUsers>();
builder.Services.AddScoped<IRepositoryCustomer, RepositoryCustomer>();
builder.Services.AddScoped<IRepositoryAuthentication, RepositoryAuthentication>();

//Servicos
builder.Services.AddScoped<IServiceCompany, ServiceCompany>();
builder.Services.AddScoped<IServiceCategory, ServiceCategory>();
builder.Services.AddScoped<IServiceComplement, ServiceComplement>();
builder.Services.AddScoped<IServicePerson, ServicePerson>();
builder.Services.AddScoped<IServiceProduct, ServiceProduct>();
builder.Services.AddScoped<IServiceUsers, ServiceUsers>();
builder.Services.AddScoped<IServiceCustomer, ServiceCustomer>();
builder.Services.AddScoped<IServiceAuthentication, ServiceAuthentication>();

builder.Services.AddControllers();
builder.Services.AddSwaggerGen(s =>
{

    s.SwaggerDoc("v1", new OpenApiInfo
    {
        Version = "v1",
        Title = "API Microservice - RW Food",
        Description = "API .NET 6",
        Contact = new OpenApiContact
        {
            Name = "RW Consultoria",
            Email = string.Empty,
            Url = new Uri("https://www.rwconsultoria.com.br/")
        }
    });

    //Habilita TOKEN - JWT
    s.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "JWT Authorization header using the Bearer scheme."
    });

    s.AddSecurityRequirement(new OpenApiSecurityRequirement {
                    {
                        new OpenApiSecurityScheme {
                            Reference = new OpenApiReference {
                                Type = ReferenceType.SecurityScheme,
                                    Id = "Bearer"
                            }
                        },
                        new string[] { }

                    }
                });

    s.ResolveConflictingActions(apiDescriptions => apiDescriptions.First());

    var xmlPath = Path.Combine(AppContext.BaseDirectory, "Swagger.xml");

    s.IncludeXmlComments(xmlPath);
});

var key = Encoding.ASCII.GetBytes(SettingsSecret.Secret);
builder.Services.AddAuthentication(x =>
{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(x =>
{
    x.RequireHttpsMetadata = false;
    x.SaveToken = true;
    x.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(key),
        ValidateIssuer = false,
        ValidateAudience = false
    };
});


builder.Services.AddEndpointsApiExplorer();
builder.Logging.AddConsole();

//string caminhoLog = $"{Directory.GetCurrentDirectory()}\\Logs\\{DateTime.Now.ToString("dd-MM-yyyy")}";
//string nomeArquivo = $"Log_{DateTime.Now.ToString("ddMMyyyy_HHmmss")}.txt";

//if (!Directory.Exists(caminhoLog))
//    Directory.CreateDirectory(caminhoLog);


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Logging.AddConsole();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseSwagger(c =>
{
    c.SerializeAsV2 = true;
});

app.UseSwaggerUI(c =>
{
    c.InjectStylesheet("/swagger-ui/custom.css");
    c.SwaggerEndpoint("./v1/swagger.json", "Microservices - RW food V1");
    //c.SwaggerEndpoint("https://webapi.espm.br/consultasv2/swagger/v2/swagger.json", "EspmWebAPI v2");

});

app.UseDeveloperExceptionPage();
app.UseRouting();
app.UseCors(x => x
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());

app.UseAuthentication();
app.UseAuthorization();

app.UseStaticFiles();

app.UseHttpsRedirection();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.Run();
