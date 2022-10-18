import { FastifyInstance, FastifyRequest, FastifyReply, FastifyServerOptions } from 'fastify';
import baseRoutes from './services/base/index';

const pluginRoutes = [
  {
    method: 'GET',
    url: '/plugin',
    schema: {},
    handler: (req: FastifyRequest, reply: FastifyReply) => {
      const result = { message: 'hello from @alea/plugin-base-template' }
      reply.send(result)
    }
  },
  {
    method: 'GET',
    url: '/plugin-version',
    schema: {},
    handler: (req: FastifyRequest, reply: FastifyReply) => {
      const result = { version: '1.0.0' }
      reply.send(result)
    }
  }  
]

/**
 * Registers all the plugin routes
 * @param fastify Fastify main instance
 * @returns Fastify instance
 */
export default function registerRoutes(fastify: FastifyInstance, opts: any) {
    const routes = Array().concat(pluginRoutes, baseRoutes)
    const { prefix } = opts || ''
    routes.map((route) => {
     fastify.register(async (app, _, done) => {
      app.route(route)
      done()
     }, { prefix })
    })
    return fastify
  }