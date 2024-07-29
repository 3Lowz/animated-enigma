import { FastifyInstance, FastifyPluginOptions, FastifyReply as FRep, RouteOptions } from 'fastify'
import { FastifyGuiRequest as FReq, guiRequestDecorator } from './gui.decorators'
import { guiHook } from './gui.hooks'

// Example interface extension
interface FastifyReplyDep extends Omit<FRep, 'sendFile'> {
  sendFile: any
}

const guiRoutes = [
  {
    method: 'GET',
    url: '/gui',
    schema: {},
    handler: (req: FReq, reply: FRep) => {
      reply.send(req.service.index())
    },
  },
  {
    method: 'GET',
    url: '/version',
    schema: {},
    handler: (req: FReq, reply: FRep) => {
      const result = { version: '1.0.0' }
      reply.send(result)
    },
  },
  {
    method: 'GET',
    url: '/webapp',
    handler: (req: FReq, reply: FastifyReplyDep) => {
      reply.sendFile('/components/webapp')
    },
  },
] as RouteOptions[]

export function registerGuiRoutes(fastify: FastifyInstance, opts: FastifyPluginOptions) {
  let routes = [...guiRoutes]

  // Hooking routes
  routes = routes.map((route) => {
    return { ...route, onRequest: guiHook }
  })

  const { prefix } = opts ?? ''

  fastify.register(async (app, _, done) => {
    // Decorating services route - Here we should evaluate proper encapsulation
    app.decorateRequest('service', guiRequestDecorator)
    // Registering services routes
    routes.map(
      (route) => {
        app.route(route)
      },
      { prefix }
    )
    done()
  })

  return fastify
}
