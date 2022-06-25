import { StepDefinitions } from 'jest-cucumber'
import { context } from '@tests/features/context'

export const coreCommandSteps: StepDefinitions = ({ when }) => {

  /* -------------------------------------------------------------------------- */
  /*                                    When                                    */
  /* -------------------------------------------------------------------------- */

  when(/^User undoes the last action$/, () => {
    context.processor.undo()
  })
}
