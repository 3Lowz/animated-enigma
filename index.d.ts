import {
  FastifyPluginAsync,
  FastifyPluginOptions,
  FastifyRequest
} from "fastify"
import { EntityMetadata } from "typeorm"

export function moduleName(any): FastifyPluginAsync

// export Entities: EntityMetadata[]

export interface FPluginOptions extends FastifyPluginOptions {
  prefix?: string | ''
}

export interface FReq extends FastifyRequest {
  service?: any
}

declare module 'fastify' {

  export interface FReq extends FastifyRequest {
    service?: any
  }

  // TODO: this seems to not working properly
  export interface FPluginOptions extends FastifyPluginOptions {
    prefix?: string | ''
  }

}

