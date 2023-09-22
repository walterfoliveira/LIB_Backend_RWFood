﻿namespace rwfood.domain.Dto
{
    public class ProductDto: BaseDTO
    {
        public int IdCategory { get; set; }
        public int Status { get; set; }
        public int Stock { get; set; }        
        public string Code1 { get; set; }
        public string Code2 { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string? Image1 { get; set; }
        public string? Image2 { get; set; }
        public decimal Amount1 { get; set; }
        public decimal Amount2 { get; set; }
        public decimal Amount3 { get; set; }
        public decimal Amount4 { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
