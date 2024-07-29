import { FastifyInstance, FastifyRequest, FastifyReply, FastifyPluginOptions, RouteOptions } from 'fastify'
import emptyHook from './hooks/empty.hook'
import { registerGuiRoutes } from './services/gui'
import { registerAuthRoutes } from './services/auth'
// import base from './services/base/index'

/**
 * Global plugin routes
 */
const moduleRoutes = [
  {
    method: 'GET',
    url: '/plugin',
    schema: {},
    handler: (req: FastifyRequest, reply: FastifyReply) => {
      const result = { message: 'hello from @3lowz/skeleton-react' }
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

  registerAuthRoutes(fastify, opts)
  registerGuiRoutes(fastify, opts)

  // TODO: allow method definition
  const hookedRoutes = routes.map((route) => {
    return { ...route, onRequest: emptyHook }
  })

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
