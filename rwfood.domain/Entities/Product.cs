using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rwfood.domain.Entities
{
    public class Product: BaseEntity
    {
        public int IdCompany { get; set; }
        public int IdCategory { get; set; }
        public int Status { get; set; }
        public string Code1 { get; set; }
        public string Code2 { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Amount1 { get; set; }
        public decimal Amount2 { get; set; }
        public decimal Amount3 { get; set; }
        public decimal Amount4 { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
