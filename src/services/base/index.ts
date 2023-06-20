import { FastifyRequest, FastifyReply } from 'fastify'
import { RelationCountMetadata } from 'typeorm/metadata/RelationCountMetadata';
import { baseServiceHook } from './base.hook'
import BaseService from './base.service'

// Base service routes
const baseRoutes = [
  /* **Example route
  {
    method: ['GET', 'POST'],
    url: '/*',
    schema: { body: {}, query: {}, params: {} },
    onRequest: serviceHook,
    handler: function(request, reply) {} .  // can be async
  }, 
   */
  {
    method: 'GET',
    url: '/base',
    schema: {},
    handler: (req: FastifyRequest, reply: FastifyReply) => {
      reply.send(
        BaseService.index()
      )
    }
  },
  {
    method: 'GET',
    url: '/version',
    schema: {},
    handler: (req: FastifyRequest, reply: FastifyReply) => {
      const result = { version: '1.0.0' }
      reply.send(result)
    }
  },
]

// Hooking services routes
const serviceRoutes = baseRoutes.map((route) => { return { ...route, onRequest: baseServiceHook } })

export default serviceRoutes