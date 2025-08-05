using Microsoft.EntityFrameworkCore;
using TaskPal.Models;

namespace TaskPal.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) :
        base(options){}
        public DbSet<TaskItem> Tasks { get; set; }
    }
}