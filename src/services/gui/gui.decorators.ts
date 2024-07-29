import { FastifyRequest } from 'fastify'
import GUIService from './gui.service'

export interface FastifyGuiRequest extends FastifyRequest {
  service: GUIService
}

export const guiRequestDecorator = () => {
  return new GUIService()
}
