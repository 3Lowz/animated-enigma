import { FastifyInstance, FastifyRequest } from 'fastify'
import { MikroORM } from '@mikro-orm/core'

declare module 'fastify' {
  interface FastifyInstance {
    db: MikroORM
  }

  interface FastifyRequest {
    service: any
  }
}

declare module '@adm-3/ath-module' {
    
}

export { FastifyInstance }
