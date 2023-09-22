namespace rwfood.domain.Dto
{
    public class CompanyDto: BaseDTO
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
