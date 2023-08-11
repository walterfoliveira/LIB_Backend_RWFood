using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rwfood.domain.Entities
{
    public class Complement: BaseEntity
    {
        public int Status { get; set; }
        public string Name { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
