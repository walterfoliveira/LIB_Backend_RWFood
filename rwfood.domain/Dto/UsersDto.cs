namespace rwfood.domain.Dto
{
    public class UsersDto: BaseDTO
    {
        public int Level { get; set; }
        public int Status { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Mail { get; set; }
        public string Pass { get; set; }
        public string Cell { get; set; }
        public string Document { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime Updated { get; set; }
    }
}
