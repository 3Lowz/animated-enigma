import { FastifyRequest, FastifyReply } from 'fastify'
import BaseController from './base.controllers' ;

const baseRoutes = [
  {
    method: 'GET',
    url: '/base',
    schema: {},
    handler: (req: FastifyRequest, reply: FastifyReply) => {
      reply.send(
        BaseController.index(req, reply)
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
  }
]

export default baseRoutes