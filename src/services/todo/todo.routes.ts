import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest as FReq,
  FastifyReply as FRep,
  RouteOptions,
  FastifyRequest,
} from 'fastify'
import { TodoCreateSchema } from './todo.schemas'
import TodoService from './todo.service'

export interface FastifyTodoRequest extends FastifyRequest {
  body: {
    id?: string
    blob: string
    isDone: boolean
  }
}

export const todoRoutes = [
  {
    method: 'GET',
    url: '/',
    schema: {},
    handler: async (req: FastifyTodoRequest, reply: FRep) => {
      const todos = await req.service.getList()
      reply.send(todos)
    },
  },
  {
    method: 'POST',
    url: '/',
    schema: TodoCreateSchema,
    handler: async (req: FastifyTodoRequest, reply: FRep) => {
      const todo = await req.service.create({ ...req.body })
      reply.send({ ...todo })
    },
  },
  {
    method: ['POST', 'PATCH'],
    url: '/:id',
    schema: TodoCreateSchema,
    handler: async (req: FastifyTodoRequest, reply: FRep) => {
      const todo = await req.service.update(req.body.id, { ...req.body })
      reply.send({ ...todo })
    },
  },

  {
    method: 'DELETE',
    url: '/:id',
    schema: TodoCreateSchema,
    handler: async (req: FastifyTodoRequest, reply: FRep) => {
      const todo = await req.service.delete({ id: req.id })
      reply.send({ ...todo })
    },
  },
] as RouteOptions[]

export async function registerTodoRoutes(fastify: FastifyInstance, opts: FastifyPluginOptions) {
  let routes = [...todoRoutes]

  let { prefix, db } = opts
  prefix = 'todo'

  if (!db) {
    throw new Error(`A Database connection must be specified`, { cause: { statusCode: 500 } })
  }

  fastify.register(
    (app, _, done) => {
      // Decorating services route - Here we should evaluate proper encapsulation
      app.decorateRequest('service', () => {
        return new TodoService(db)
      })

      // Registering services routes
      routes.map((route) => {
        app.route(route)
      })
      done()
    },
    { prefix }
  )

  return fastify
}
