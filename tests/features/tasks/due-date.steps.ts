import { StepDefinitions } from 'jest-cucumber'
import { SetDueDate } from '@src/tasks/commands'
import { context } from '@tests/features/context'
import { titled, overdue } from '@src/tasks/queries/task'

export const dueDateSteps: StepDefinitions = ({ when, then }) => {

  /* -------------------------------------------------------------------------- */
  /*                                    When                                    */
  /* -------------------------------------------------------------------------- */

  when(/^User sets the due date of the task '(.*)' to '(.*)'$/, (taskTitle: string, dueDate: string) => {
    const task = context.tasks.find(titled(taskTitle))
    context.processor.execute(new SetDueDate(task[0], new Date(dueDate)))
  })

  /* -------------------------------------------------------------------------- */
  /*                                    Then                                    */
  /* -------------------------------------------------------------------------- */

  then(/^User has (\d+) overdue task[s]?$/, (count: string) => {
    const tasks = context.tasks.find(overdue())
    expect(tasks.length).toStrictEqual(+count)
  })

  then(/^Task '(.*)' has a due date of '(.*)'$/, (taskTitle: string, dueDate: string) => {
    const tasks = context.tasks.find(titled(taskTitle))
    expect(tasks[0].dueDate).toStrictEqual(new Date(dueDate))
  })

  then(/^Task '(.*)' has no due date$/, (taskTitle: string) => {
    const tasks = context.tasks.find(titled(taskTitle))
    expect(tasks[0].dueDate).toStrictEqual(undefined)
  })
}
