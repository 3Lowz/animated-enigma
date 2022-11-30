import { FastifyReply as FReply } from 'fastify'
import { FReq } from './../../../index'
import GUIService from './gui.service'

export const guiHook = (req: FReq, reply: FReply, done: Function) => {
  // Whatever it needs
  req.service = GUIService
  done()
}