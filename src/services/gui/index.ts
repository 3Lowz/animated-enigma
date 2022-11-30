import { FastifyReply as FReply } from 'fastify'
import { FReq } from './../../../index'
import { guiHook } from './gui.hook'

// Example interface extension
interface FastifyReplyDep extends Omit<FReply, 'sendFile'> {
  sendFile: any
}

const guiRoutes = [
  {
    method: 'GET',
    url: '/base',
    schema: {},
    handler: (req: FReq, reply: FReply) => {
      reply.send(
        req.service.index(req, reply)
      )
    }
  },
  {
    method: 'GET',
    url: '/version',
    schema: {},
    handler: (req: FReq, reply: FReply) => {
      const result = { version: '1.0.0' }
      reply.send(result)
    }
  },
  {
    method: 'GET',
    url: '/xxx',
    handler: (req: FReq, reply: FastifyReplyDep) => {
      reply.sendFile('/components/webapp')
    }
  }
]

const hookedRoutes = guiRoutes.map(route => { return { ...route, onRequest: guiHook} })

export default hookedRoutes