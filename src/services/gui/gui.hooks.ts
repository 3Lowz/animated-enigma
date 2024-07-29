import { FastifyRequest as FReq, FastifyReply as FReply } from 'fastify'

export const guiHook = (req: FReq, reply: FReply, done: Function) => {
  /**
   * Add here whatever hooked need
   */
  console.log(`<d> - Running hook`)

  done()
}
