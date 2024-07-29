import { FastifyRequest } from 'fastify'
import AuthService from './auth.service'

export interface FastifyAuthRequest extends FastifyRequest {
  service: AuthService
}

export const authRequestDecorator = () => {
  return new AuthService()
}
