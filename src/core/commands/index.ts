export { ICommand } from './command'
export { Processor } from './processor'


// class Identity<TType, Brand> {
//   constructor(private readonly value: TType) { }

//   equals(other: Identity<TType, Brand>): boolean {
//     return this.value === other.value
//   }
//   private __brand__: Brand // вся магия тут
// }


// class TaskId extends Identity<number, 'TaskId'> { }
// class ProjectId extends Identity<number, 'ProjectId'> { }

// function assignTaskToProject(taskId: TaskId, projectId: ProjectId) {}

// const taskId = new TaskId(42) as ProjectId
// const wtfId = new Identity<number>(42) as ProjectId as TaskId

// assignTaskToProject(wtfId, taskId)