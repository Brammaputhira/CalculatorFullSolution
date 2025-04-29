namespace CalculatorAPI.Models
{
    public class CalculationRequest
    {
        public double FirstOperand { get; set; }
        public double SecondOperand { get; set; }
        public string Operation { get; set; }
    }
}
