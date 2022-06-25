import { ICommand } from '@src/core/commands'
import { Task } from '@src/tasks/models'
import { ITasksContext } from '../context'


export class MarkCompletedTask implements ICommand<ITasksContext, void> {
  private previousValue: boolean

  /**
   * Initialize a new instance of the MarkCompletedTask class.
   * @param task Task to complete.
   */
  constructor(
    private task: Task,
    private isCompleted: boolean = true
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  execute(context: ITasksContext): void {
    this.previousValue = this.task.isCompleted
    this.task.markCompleted(this.isCompleted)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  undo(context: ITasksContext): void {
    this.task.markCompleted(this.previousValue)
  }
}