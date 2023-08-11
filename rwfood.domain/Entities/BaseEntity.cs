using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rwfood.domain.Entities
{
    public abstract class BaseEntity
    {
        public virtual int Id { get; set; } = 0;
        public virtual int IdCompany { get; set; } = 0;
    }
}
