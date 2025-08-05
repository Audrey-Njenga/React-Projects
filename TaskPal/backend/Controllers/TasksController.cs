using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskPal.Data;
using TaskPal.Models;

namespace TaskPal.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TasksController : ControllerBase
    {
        private readonly AppDbContext _context;
        public TasksController(AppDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaskItem>>> GetTasks() {
            var tasks = await _context.Tasks.ToListAsync();
            return Ok(tasks);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<TaskItem>> GetTask(int id)
        {
            var task = await _context.Tasks.FindAsync(id);
            if (task == null) return NotFound();
            return Ok(task);
        }
        [HttpPost]
        public async Task<ActionResult<TaskItem>> CreateTask(TaskItem taskItem)
        {
            _context.Tasks.Add(taskItem);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTask), new { id = taskItem.Id }, taskItem);
        }
    }
}