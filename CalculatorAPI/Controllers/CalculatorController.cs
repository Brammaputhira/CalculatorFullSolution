using CalculatorAPI.Data;
using CalculatorAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CalculatorAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalculatorController : ControllerBase
    {
        private readonly CalculatorDbContext _context;

        public CalculatorController(CalculatorDbContext context)
        {
            _context = context;
        }

        [HttpPost("calculate")]
        public async Task<IActionResult> Calculate([FromBody] CalculationRequest request)
        {
            double result = 0;

            switch (request.Operation)
            {
                case "+": result = request.FirstOperand + request.SecondOperand; break;
                case "-": result = request.FirstOperand - request.SecondOperand; break;
                case "*": result = request.FirstOperand * request.SecondOperand; break;
                case "/": result = request.SecondOperand != 0 ? request.FirstOperand / request.SecondOperand : 0; break;
                default: return BadRequest("Invalid operation.");
            }

            var history = new CalculationHistory
            {
                UserId = "tempUser", // later use real user id
                Expression = $"{request.FirstOperand} {request.Operation} {request.SecondOperand}",
                Result = result.ToString()
            };

            _context.CalculationHistory.Add(history);
            await _context.SaveChangesAsync();

            return Ok(new { Result = result });
        }

    }
    
    }
