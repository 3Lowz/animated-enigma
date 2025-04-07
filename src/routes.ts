import { FastifyInstance, FastifyRequest, FastifyReply, FastifyPluginOptions, RouteOptions } from 'fastify'
import { registerTodoRoutes } from 'services/todo'
import emptyHook from './hooks/empty.hook'

/**
 * Global plugin routes
 */
const moduleRoutes = [
  {
    method: 'GET',
    url: '/plugin',
    schema: {},
    handler: (req: FastifyRequest, reply: FastifyReply) => {
      const result = { message: 'hello from @3lowz/animated-enigma' }
      reply.send(result)
    },
  },
] as RouteOptions[]

/**
 * Registers all the plugin routes
 * @param fastify Fastify main instance
 * @returns Fastify instance
 */
export default function registerRoutes(fastify: FastifyInstance, opts: FastifyPluginOptions) {
  let routes = [
    ...moduleRoutes,
    // Add you routes here...
  ]

  // TODO: allow method definition
  const hookedRoutes = routes.map((route) => {
    return { ...route, onRequest: emptyHook }
  })

  registerTodoRoutes(fastify, { ...opts, db: opts.db })

  const { prefix } = opts || ''
  fastify.register(
    (app, _, done) => {
      routes.map((route) => {
        app.route(route)
      })
      done()
    },
    { prefix }
  )
  return fastify
}
