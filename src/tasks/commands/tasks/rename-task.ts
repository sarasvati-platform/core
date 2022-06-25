import { ICommand } from '@src/core/commands'
import { Task } from '@src/tasks/models'
import { ITasksContext } from '../context'


export class RenameTask implements ICommand<ITasksContext, void> {
  private previousValue: string

  /**
   * Initialize a new instance of the RenameTask class.
   * @param task Task to complete.
   */
  constructor(
    private task: Task,
    private readonly title: string
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  execute(context: ITasksContext): void {
    this.previousValue = this.task.title
    this.task.rename(this.title)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  undo(context: ITasksContext): void {
    this.task.rename(this.previousValue)
  }
}