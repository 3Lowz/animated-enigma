import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import gui from './services/gui/index';
import api from './services/api/api.routes'

const moduleRoutes = [
  {
    method: 'GET',
    url: '/plugin',
    schema: {},
    handler: (req: FastifyRequest, reply: FastifyReply) => {
      const result = { message: 'hello from @alea-module/skeleton-react' }
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
    const routes = Array().concat(moduleRoutes, gui, api)
    const { prefix } = opts || ''
    routes.map((route) => {
     fastify.register(async (app, _, done) => {
      app.route(route)
      done()
     }, { prefix })
    })
    return fastify
  }