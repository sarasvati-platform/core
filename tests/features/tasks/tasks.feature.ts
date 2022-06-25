import { loadFeature, autoBindSteps } from 'jest-cucumber'

import { coreCommandSteps } from '@tests/features/core/command.steps'
import { genericSteps } from '@tests/features/tasks/generic.steps'
import { dueDateSteps } from '@tests/features/tasks/due-date.steps'
import { completeSteps } from '@tests/features/tasks/complete.steps'

import { context } from '@tests/features/context'

autoBindSteps([
  loadFeature('features/tasks/generic.feature'),
  loadFeature('features/tasks/due-date.feature'),
  loadFeature('features/tasks/complete.feature'),
], [
  coreCommandSteps,
  genericSteps,
  dueDateSteps,
  completeSteps
])

beforeEach(() => context.reset())