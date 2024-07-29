import { FastifyInstance, FastifyPluginCallback, FastifyPluginOptions } from 'fastify'
import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import registerRoutes from './routes'

const templatePlugin: FastifyPluginCallback = async (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
  done: Function
): Promise<void> => {
  /**
   * Custom initialization business logic
   * goes here
   */

  // Registering routes
  registerRoutes(fastify, opts)
  done()
}

export default fp(templatePlugin, {
  fastify: '4.x',
  name: '@3Lowz/react-template',
  // dependencies: ['@fastify/static'],
  encapsulate: false,
}) as FastifyPluginAsync
