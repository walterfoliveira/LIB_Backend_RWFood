using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rwfood.domain.Entities
{
    public class Authentication : BaseEntity
    {
        public string UserName { get; set; }
        public string PassWord { get; set; }
        public string Role { get; set; }
    }
}
