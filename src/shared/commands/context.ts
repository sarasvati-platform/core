import { IRepository } from '@src/core/persistence/repository'
import { ITasksContext } from '@src/tasks/commands/context'
import { TaskId, Task } from '@src/tasks/models'


export class CommandsContext implements ITasksContext {
  constructor(
    public readonly tasks: IRepository<TaskId, Task>
  ) {}
}
