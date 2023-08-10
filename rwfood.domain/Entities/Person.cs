using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rwfood.domain.Entities
{
    public class Person: BaseEntity
    {
        public int IdCompany { get; set; }
        public int Status { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Cell { get; set; }
        public string Document { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
