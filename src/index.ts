import { FastifyInstance, FastifyPluginOptions } from "fastify"
import fp from "fastify-plugin"
import registerRoutes from './routes'

async function pluginName(fastify: FastifyInstance, opts: FastifyPluginOptions): Promise<any> {
    // Registering routes
    registerRoutes(fastify)
}

export default fp(pluginName, {
    fastify: '4.x',
    name: '@alea/plugin-base-template',
    dependencies: ['@fastify/static']
})