import { Entity, UuidIdentity } from '@src/core/models'


export class TaskId extends UuidIdentity<'TaskId'> { }

export class Task extends Entity<TaskId> {
  private completed = false
  private _title = ''
  public _dueDate: Date | undefined

  constructor(
    identity: TaskId,
    title: string
  ) {
    super(identity)
    this._title = title
  }

  markCompleted(value = true): void {
    this.completed = value
  }

  rename(title: string): void {
    this._title = title
  }

  get isCompleted(): boolean {
    return this.completed
  }

  get title(): string {
    return this._title
  }

  setDueDate(date: Date | undefined): void {
    this._dueDate = date
  }

  get dueDate(): Date | undefined {
    return this._dueDate
  }
}