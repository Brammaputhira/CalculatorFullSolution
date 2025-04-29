using CalculatorAPI.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
//Add CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
       policy =>
       {
           policy.WithOrigins("http://localhost:3000") // Allow requests from the frontend
                 .AllowAnyHeader()
                 .AllowAnyMethod();
       });
    options.AddPolicy("AllowReactApp",
       policy =>
       {
           policy.WithOrigins("http://localhost:3001") // Allow requests from the frontend
                 .AllowAnyHeader()
                 .AllowAnyMethod();
       });
    options.AddPolicy("AllowReactApp",
       policy =>
       {
           policy.WithOrigins("http://localhost:3002") // Allow requests from the frontend
                 .AllowAnyHeader()
                 .AllowAnyMethod();
       });
    options.AddPolicy("AllowReactApp",
       policy =>
       {
           policy.WithOrigins("http://localhost:3003") // Allow requests from the frontend
                 .AllowAnyHeader()
                 .AllowAnyMethod();
       });
});



builder.Services.AddDbContext<CalculatorDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));


// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();

//app.UseAuthorization();
// Use CORS
app.UseCors("AllowReactApp");
app.MapControllers();

app.Run();
