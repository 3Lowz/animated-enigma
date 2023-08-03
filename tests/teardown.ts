import { MikroORM } from '@mikro-orm/mysql'

export const teardown = async (db: MikroORM) => {
  return db.close()
}
