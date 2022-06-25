import { ICommand } from '@src/core/commands'
import { Task, TaskId } from '@src/tasks/models'
import { ITasksContext } from '@src/tasks/commands/context'


export class CreateTask implements ICommand<ITasksContext, Task> {
  private createdTask: Task

  /**
   * Initialize a new instance of the CreateTask class.
   * @param title Title of a task.
   */
  constructor(
    private title: string
  ) {}

  execute(context: ITasksContext): Task {
    this.createdTask = new Task(new TaskId(), this.title)
    context.tasks.save(this.createdTask)
    return this.createdTask
  }

  undo(context: ITasksContext): Task {
    context.tasks.delete(this.createdTask.identity)
    return this.createdTask
  }
}