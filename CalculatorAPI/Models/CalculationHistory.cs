namespace CalculatorAPI.Models
{
    public class CalculationHistory
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string Expression { get; set; }
        public string Result { get; set; }
        public DateTime CreatedAt { get; set; }= DateTime.UtcNow;
    }
}
