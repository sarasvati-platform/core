import { IRepository } from '@src/core/persistence/repository'
import { Task, TaskId } from '@src/tasks/models'

export interface ITasksContext {
  get tasks(): IRepository<TaskId, Task>
}