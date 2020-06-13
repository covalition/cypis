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
        int AddTask(string title);
        Objects.TaskListItem GetTask(int id);
    }

    public class TaskService : BaseService, ITaskService
    {
        public TaskService(ApplicationDbContext dbContext) : base(dbContext) { }

        public int AddTask(string title) {
            DomainModel.Task newTask = new DomainModel.Task {
                Title = title
            };
            DbContext.Tasks.Add(newTask);
            DbContext.SaveChanges();
            return newTask.Id;
        }

        public Objects.TaskListItem GetTask(int id) {
            DomainModel.Task task = DbContext.Tasks.Find(id);
            if (task != null)
                return new Objects.TaskListItem { Title = task.Title };
            else
                return null;
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
