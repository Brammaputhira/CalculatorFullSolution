using CalculatorAPI.Models;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace CalculatorAPI.Data
{
    public class CalculatorDbContext : DbContext
    {
        public CalculatorDbContext() { }
        public CalculatorDbContext(DbContextOptions<CalculatorDbContext> options) : base(options) { }
        public DbSet<CalculationHistory> CalculationHistory { get; set; }
        public DbSet<User> Users { get; set; }

    }

}

