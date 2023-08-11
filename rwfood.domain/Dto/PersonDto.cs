namespace rwfood.domain.Dto
{
    public class PersonDto : BaseDTO
    {
        public int Status { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Cell { get; set; }
        public string Document { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
