namespace rwfood.domain.Dto
{
    public class DeliveryManDto: BaseDTO
    {
        public int Status { get; set; }
        public string Name { get; set; }
        public string Cell { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
