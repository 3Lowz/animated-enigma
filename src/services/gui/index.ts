import { FastifyRequest, FastifyReply } from 'fastify'
import GUIService from './gui.controllers' ;

interface FastifyReplyDep extends FastifyReply {
  sendFile: Function
}

const guiRoutes = [
  {
    method: 'GET',
    url: '/base',
    schema: {},
    handler: (req: FastifyRequest, reply: FastifyReply) => {
      reply.send(
        GUIService.index(req, reply)
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
  {
    method: 'GET',
    url: '/webapp',
    handler: (req: FastifyRequest, reply: FastifyReplyDep) => {
      reply.sendFile('/components/webapp')
    }
  }
]

export default guiRoutes