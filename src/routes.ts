import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
<<<<<<< HEAD
import baseRoutes from './services/base/index';
import apiRoutes from './services/api/api.routes'
=======
import guiRoutes from './services/gui/index';
>>>>>>> master

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
<<<<<<< HEAD
    const routes = Array().concat(pluginRoutes, baseRoutes, apiRoutes)
=======
    const routes = Array().concat(pluginRoutes, guiRoutes)
>>>>>>> master
    routes.map((route) => fastify.route(route))
    return fastify
  }