import { ICommand } from './command'


export class Processor {
  private stack: ICommand<unknown, unknown>[] = []

  /**
   * Initialize a new instance of the Processor class.
   * @param context Context of the processor.
   */
  constructor(public readonly context: unknown) { }

  /**
   * Excecute the command.
   * @param command Command to process.
   * @returns {TResult} Returns the result of the command.
   */
  execute<TContext, TResult>(command: ICommand<TContext, TResult>): TResult {
    if (this.stack.includes(command)) {
      throw new Error('Command is already executed.')
    }
    this.stack.push(command)
    return command.execute(this.context as TContext)
  }

  /**
   * Revert the last executed command.
   */
  undo(): void {
    const command = this.stack.pop()
    if (command) {
      command.undo(this.context)
    } else {
      throw new Error('No command to undo.')
    }
  }
}
