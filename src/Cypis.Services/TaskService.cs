using Covalition.Cypis.DomainModel;
using Covalition.Cypis.Persistence;
using Covalition.Cypis.Services.Objects;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Covalition.Cypis.Services
{
    public interface ITaskService
    {
        Task<List<DomainModel.Task>> GetTasksAsync();
        Task<List<TaskListItem>> GetTaskListAsync();
        Task<int> AddTask(string title);
        Task<DomainModel.Task> GetTask(int id);
    }

    public class TaskService : BaseService, ITaskService
    {
        public TaskService(ApplicationDbContext dbContext) : base(dbContext) { }

        public async Task<int> AddTask(string title) {
            DomainModel.Task newTask = new DomainModel.Task(title);
            DbContext.Tasks.Add(newTask);
            await DbContext.SaveChangesAsync();
            return newTask.Id;
        }

        public async Task<DomainModel.Task> GetTask(int id) {
            return await DbContext.Tasks.FindAsync(id);
        }

        public Task<List<TaskListItem>> GetTaskListAsync() {
            return DbContext.Tasks
                .Select(t => new TaskListItem {
                    Id = t.Id,
                    Title = t.Title
                })
                .ToListAsync();
        }

        public Task<List<DomainModel.Task>> GetTasksAsync() {
            return DbContext.Tasks.ToListAsync();
        }
    }
}
