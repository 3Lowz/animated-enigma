import { FastifyInstance, FastifyPluginCallback, FastifyPluginOptions } from 'fastify'
import { MikroORM, MySqlDriver } from '@mikro-orm/mysql'
// import { FastifyPlugin } from 'fastify'
import fp from 'fastify-plugin'

import dbConfig from './mikro-orm.config'
import registerRoutes from './routes'
import { registerTodoRoutes } from './services/todo'

export interface FastifyPluginEnigmaOptions extends FastifyPluginOptions {
  db: MikroORM
}

const templatePlugin: FastifyPluginCallback = (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
  done: Function
): void => {
  /**
   * Custom initialization business logic
   * goes here
   */

  // Registering routes
  registerRoutes(fastify, opts)

  /**
   * We check and create a self-contained Database Instance
   * but is should also expected to be passed down
   */
  // MikroORM.init<MySqlDriver>(dbConfig).then((conn) => {
  //   console.log(`Connection initiated`)
  //   registerTodoRoutes(fastify, { db: conn })
  //   done()
  // })

  // registerTodoRoutes(fastify, { ...opts, db: opts.db })
  done()
}

export default fp(templatePlugin, {
  fastify: '5.x',
  name: '@3Lowz/animated-enigma',
  // dependencies: ['@fastify/static'],
  encapsulate: false,
})
