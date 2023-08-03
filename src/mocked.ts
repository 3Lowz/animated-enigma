import { FastifyInstance, FastifyServerOptions } from 'fastify'
import fastify from 'fastify'
import { MikroORM, MySqlDriver } from '@mikro-orm/mysql'
import dbConfig from './mikro-orm.config'
import fastifySwagger from '@fastify/swagger'

// import { FastifyInstance, ErrorResponse } from '../index'

import registerRoutes from './routes'
function registerCustomModules(fastify: FastifyInstance): FastifyInstance {
  // Declare custom modules here...

  /*
   * This should be done by @adm-3/database-module
   */
  fastify.register(async (app, _, done) => {
    const mikro: MikroORM = await MikroORM.init<MySqlDriver>(dbConfig)
    fastify.decorate('db', mikro)
    done()
  })

  return fastify
}

// Configuring the Fastify Instance
function createServer(config: object): FastifyInstance {
  const opts: FastifyServerOptions = { ...config } // Typeization

  // Initializing
  const server = fastify(opts)

  // @ts-ignore
  server.register(fastifySwagger, {
    exposeRoute: true,
    routePrefix: '/swagger',
    swagger: {
      info: {
        title: 'Basic swagger',
        description: 'Documentation for available API',
        version: '1.0.0',
      },
    },
  })

  registerCustomModules(server)

  // Registering routes
  registerRoutes(server, {})

  return server
}

export default createServer
