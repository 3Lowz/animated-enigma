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

//@company/module
declare module 'animated-enigma' {
    
}

export { FastifyInstance }
