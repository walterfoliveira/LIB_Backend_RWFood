﻿#nullable disable

namespace rwfood.domain.Dto
{
    public class CategoryDto : BaseDTO
    {        
        public int Status { get; set; }
        public string Name { get; set; }
        public DateTime CreatedAt { get; set; }        
    }
}
