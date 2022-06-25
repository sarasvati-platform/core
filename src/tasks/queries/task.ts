import { eq, lt, Query } from '@src/core/persistence/query'

export enum TaskFields {
  Title = 'title',
  IsCompleted = 'isCompleted',
  DueDate = 'dueDate',
}

/** Returns tasks with specified title */
export function titled(title: string): Query { return eq(TaskFields.Title, title) }

/** Returns only completed tasks */
export function completed(): Query { return eq(TaskFields.IsCompleted, true) }

/** Returns  overdue tasks */
export function overdue(): Query { return lt(TaskFields.DueDate, new Date()) }
