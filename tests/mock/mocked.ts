import { MikroORM, MySqlDriver } from '@mikro-orm/mysql'
import fastify from 'fastify'
import { FastifyInstance, FastifyServerOptions } from 'fastify'
import fastifyPrintRoutes from 'fastify-print-routes'

import fastifySwagger from '@fastify/swagger'
import dbConfig from './mikro-orm.config'

// import { FastifyInstance, ErrorResponse } from '../index'

// import registerRoutes from './../../src/routes'

// function registerCustomModules(fastify: FastifyInstance): FastifyInstance {
//   // Declare custom modules here...

//   /*
//    * This should be done by @adm-3/database-module
//    */
//   fastify.register(async (app, _, done) => {
//     const mikro: MikroORM = await MikroORM.init<MySqlDriver>(dbConfig)
//     fastify.decorate('db', mikro)
//     done()
//   })

//   return fastify
// }

import templatePlugin from './../../src'

// Configuring the Fastify Instance
async function createServer(config: object): Promise<FastifyInstance> {
  const opts: FastifyServerOptions = { ...config } // Define type

  // Initializing
  const server = fastify(opts)
  server.register(fastifyPrintRoutes)

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
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server',
      },
    ],
  })

  const db = await MikroORM.init<MySqlDriver>(dbConfig) //.then((conn: MikroORM) => {

  // @ts-ignore
  server.register(templatePlugin, {
    prefix: 'template',
    db,
  })
  // })

  await server.ready()
  server.swagger()

  return server
}

export default createServer
