import { FastifyRequest as Freq, FastifyReply as Frep } from 'fastify'

export const baseServiceHook = (req: Freq, reply: Frep, done: Function) => {
  // Hook you request here
  // req.service = new BaseService()
  done()
}