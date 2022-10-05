import { FastifyRequest, FastifyReply } from 'fastify'
import APISerivce from './api.service' ;

/**
 * 
 */
const baseRoutes = [
  {
    method: 'GET',
    url: '/api',
    schema: {},
    handler: (req: FastifyRequest, reply: FastifyReply) => {
      reply.send(
        APISerivce.index()
      )
    }
  },
  {
    method: 'GET',
    url: '/api-version',
    schema: {},
    handler: (req: FastifyRequest, reply: FastifyReply) => {
      const result = { version: '1.0.0' }
      reply.send(result)
    }
  }
]

export default baseRoutes