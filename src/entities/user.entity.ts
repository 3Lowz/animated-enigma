import { EntitySchema } from '@mikro-orm/core'

// Useful when instantiating db.repository
export class User {
  id?: string
  email: string
  password: string
}

export interface IUser extends User {}

export const userSchema = new EntitySchema<IUser>({
  name: 'User',
  tableName: 't_user',
  properties: {
    id: { type: 'bigint', primary: true },
    email: { type: 'varchar', length: 64, nullable: false },
    password: { type: 'varchar', length: 64, nullable: false },
  },
})

export default userSchema
