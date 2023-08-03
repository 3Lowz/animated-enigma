import { MikroORM, type MySqlDriver } from '@mikro-orm/mysql'
import dbConfig from './../src/mikro-orm.config'

export const setup = async () => {
  return MikroORM.init<MySqlDriver>(dbConfig)
}
