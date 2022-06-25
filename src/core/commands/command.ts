/**
 * Interface for a command.
 */
export interface ICommand<TContext, TResult> {
  /**
   * Execute the command.
   * @param context Context of the command.
   */
  execute(context: TContext): TResult

  /**
   * Revert changes made by the command.
   * @param context Context of the command.
   */
  undo(context: TContext): TResult
}
