import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import baseRoutes from './services/base/index';

const pluginRoutes = [
  {
    method: 'GET',
    url: '/',
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
export default function registerRoutes(fastify: FastifyInstance) {
    const routes = Array().concat(pluginRoutes, baseRoutes)
    routes.map((route) => fastify.route(route))
    return fastify
  }