import { Processor } from '@src/core/commands'
import { IRepository } from '@src/core/persistence/repository'
import { Task, TaskId } from '@src/tasks/models'
import { FakeRepository } from '@tests/fake-repository'
import { CommandsContext } from '@src/shared/commands/context'

export class Context {
  public processor: Processor
  public tasks: IRepository<TaskId, Task>

  reset() {
    this.tasks = new FakeRepository<TaskId, Task>()
    this.processor = new Processor(new CommandsContext(this.tasks))
  }
}

export const context = new Context()
