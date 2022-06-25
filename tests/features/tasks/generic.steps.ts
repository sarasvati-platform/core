import { StepDefinitions } from 'jest-cucumber'
import { CreateTask } from '@src/tasks/commands'
import { context } from '@tests/features/context'

export const genericSteps: StepDefinitions = ({ when, then }) => {

  /* -------------------------------------------------------------------------- */
  /*                                    When                                    */
  /* -------------------------------------------------------------------------- */

  when(/^User creates a task '(.*)'$/, (taskTitle: string) => {
    context.processor.execute(new CreateTask(taskTitle))
  })

  /* -------------------------------------------------------------------------- */
  /*                                    Then                                    */
  /* -------------------------------------------------------------------------- */

  then(/^User has (\d+) task[s]?$/, (count: string) => {
    const tasks = context.tasks.all()
    expect(tasks.length).toStrictEqual(+count)
  })
}
