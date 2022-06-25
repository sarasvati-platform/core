import { ICommand } from '@src/core/commands'
import { Task } from '@src/tasks/models'
import { ITasksContext } from '@src/tasks/commands/context'


export class SetDueDate implements ICommand<ITasksContext, void> {
  private previousDueDate: Date | undefined

  /**
   * Initialize a new instance of the SetDueDate class.
   * @param task Task to set due date for.
   */
  constructor(
    private task: Task,
    private dueDate: Date
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  execute(context: ITasksContext): void {
    this.previousDueDate = this.task.dueDate
    this.task.setDueDate(this.dueDate)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  undo(context: ITasksContext): void {
    this.task.setDueDate(this.previousDueDate)
  }
}