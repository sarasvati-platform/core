import { StepDefinitions } from 'jest-cucumber'
import { MarkCompletedTask } from '@src/tasks/commands'
import { context } from '@tests/features/context'
import { titled, completed } from '@src/tasks/queries/task'

export const completeSteps: StepDefinitions = ({ when, then }) => {

  /* -------------------------------------------------------------------------- */
  /*                                    When                                    */
  /* -------------------------------------------------------------------------- */

  when(/^User completes the task '(.*)'$/, (taskTitle: string) => {
    const task = context.tasks.find(titled(taskTitle))
    context.processor.execute(new MarkCompletedTask(task[0]))
  })

  /* -------------------------------------------------------------------------- */
  /*                                    Then                                    */
  /* -------------------------------------------------------------------------- */

  then(/^User has (\d+) completed task[s]?$/, (count: string) => {
    const tasks = context.tasks.find(completed())
    expect(tasks.length).toStrictEqual(+count)
  })

  then(/^Task '(.*)' is completed$/, (taskTitle: string,) => {
    const tasks = context.tasks.find(titled(taskTitle))
    expect(tasks[0].isCompleted).toBeTruthy()
  })

  then(/^Task '(.*)' is not completed$/, (taskTitle: string,) => {
    const tasks = context.tasks.find(titled(taskTitle))
    expect(tasks[0].isCompleted).toBeFalsy()
  })
}
