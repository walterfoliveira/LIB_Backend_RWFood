using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rwfood.domain.Entities
{
    public class DeliveryMan: BaseEntity
    {
        public int IdCompany { get; set; }
        public int Status { get; set; }
        public string Name { get; set; }
        public string Cell { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
