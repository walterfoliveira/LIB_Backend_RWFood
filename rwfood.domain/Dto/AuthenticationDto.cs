using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rwfood.domain.Dto
{
    public class AuthenticationDto : BaseDTO
    {
        public string UserName { get; set; }
        public string PassWord { get; set; }
        public string Role { get; set; }
    }
}
