import { EntitySchema } from '@mikro-orm/core'

// Useful when instantiating db.repository
export class Todo {
  id?: string
  blob: string
  isDone: boolean
}

export interface ITodo extends Todo {}

export const todoSchema = new EntitySchema<ITodo>({
  name: 'Todo',
  tableName: 't_todo',
  properties: {
    id: { type: 'bigint', primary: true },
    blob: { type: 'varchar', length: 256, nullable: false },
    isDone: { type: 'boolean', nullable: false },
  },
})

export default todoSchema
