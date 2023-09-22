using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rwfood.domain.Dto
{
    public class CustomerDto : BaseDTO
    {
        public int Impost { get; set; }
        public int Status { get; set; }
        public int? LastSale { get; set; }        
        public string Name { get; set; }
        public string Document { get; set; }
        public string Cell1 { get; set; }
        public string Cell2 { get; set; }
        public string Address { get; set; }
        public string District { get; set; }
        public string Complement { get; set; }
        public string City { get; set; }
        public string PostalCode { get; set; }        
        public DateTime CreatedAt { get; set; }
        public DateTime Updated { get; set; }
        public DateTime? Birthday { get; set; }
    }
}
