using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rwfood.domain.Entities
{
    public class Company: BaseEntity
    {
        public int Status { get; set; }
        public string Name { get; set; }
        public string Funcionamento { get; set; }
        public string Telefone { get; set; }
        public string Site { get; set; }
        public string? Image1 { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
