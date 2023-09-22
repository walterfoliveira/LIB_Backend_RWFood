using MySqlX.XDevAPI;
using Newtonsoft.Json;
using rwfood.data.Context;
using rwfood.domain.Dto;
using rwfood.domain.Entities;
using rwfood.domain.Interfaces.Repositories;
using System.Diagnostics.Contracts;

namespace rwfood.data.Repository
{
    public class RepositoryProduct : RepositoryBase<ProductDto, Product>, IRepositoryProduct
    {
        public RepositoryProduct(MySqlDbContext _context) : base(_context)
        {
            

        }

        public IEnumerable<ProductCustomDto> SelectProdutoCategory(int _idCompany)
        {
            var query = (from item in this.context.Set<Product>().
                                   Where(p => p.Status == 1)
                                      join cat in this.context.Set<Category>() on item.IdCategory equals cat.Id
                                      select new ProductCustomDto
                                      {
                                          Id = item.Id,
                                          IdCompany = item.IdCompany,
                                          IdCategory = item.IdCategory,
                                          Status = item.Status,
                                          Name = item.Name,
                                          Description = item.Description,
                                          Code1 = item.Code1,
                                          Code2 = item.Code2,
                                          Image1 = item.Image1,
                                          Image2 = item.Image2,
                                          Category = cat.Name,
                                          Amount1 = item.Amount1,
                                          Amount2 = item.Amount2,   
                                          Amount3 = item.Amount3,
                                          Amount4 = item.Amount4,
                                          Stock = item.Stock,
                                          CreatedAt = item.CreatedAt,                                          
                                      }).ToList();


            return query;
            // JsonConvert.DeserializeObject<IEnumerable<ProductCustomDto>>(JsonConvert.SerializeObject(query.AsEnumerable()));
        }
    }
}
