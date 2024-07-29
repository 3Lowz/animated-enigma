import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest as FReq,
  FastifyReply as FRep,
  RouteOptions,
} from 'fastify'
import { FastifyAuthRequest as FAReq, authRequestDecorator } from './auth.decorators'
import { AuthLoginSchema } from './auth.schemas'

export interface FastifyAuthLoginRequest extends FAReq {
  body: {
    email: string
    password: string
  }
}

export const authRoutes = [
  {
    method: 'GET',
    url: '/login',
    schema: {},
    handler: (req: FReq, reply: FRep) => {
      reply.send({})
    },
  },
  {
    method: 'POST',
    url: '/login',
    schema: AuthLoginSchema,
    handler: (req: FastifyAuthLoginRequest, reply: FRep) => {
      const token = req.service.login(req.body.email, req.body.password)
      reply.send({
        token,
      })
    },
  },
] as RouteOptions[]

export function registerAuthRoutes(fastify: FastifyInstance, opts: FastifyPluginOptions) {
  let routes = [...authRoutes]

  const { prefix } = opts ?? ''

  fastify.register(async (app, _, done) => {
    // Decorating services route - Here we should evaluate proper encapsulation
    app.decorateRequest('service', authRequestDecorator)
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
