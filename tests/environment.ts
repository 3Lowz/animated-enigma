import { TestEnvironment } from 'jest-environment-node'
import { MikroORM, type MySqlDriver } from '@mikro-orm/mysql'
import dbConfig from './mock/mikro-orm.config'
import createServer from './mock/mocked'
import { FastifyInstance } from 'fastify'

export default class LibraryEnvironment extends TestEnvironment {
  db: MikroORM
  app: FastifyInstance

  constructor(config: any, context: any) {
    super(config, context)
  }

  async setup() {
    await super.setup()

    const server = createServer({ logger: false })
    this.app = server
    // this.db = await MikroORM.init<MySqlDriver>(dbConfig)
    this.global.app = this.app as FastifyInstance
    // this.global.db = this.db as MikroORM

    return
  }

  async teardown() {
    // this.db.close()
    this.app.close()
    await super.teardown()
  }

  getVmContext() {
    return super.getVmContext()
  }

  async handleTestEvent(event: any, state: Object) {
    if (event.name === 'test_start') {
      // ...
    }
  }
}

module.exports = LibraryEnvironment
