import { FastifyInstance, FastifyServerOptions } from "fastify";
import fp from "fastify-plugin";
import registerRoutes from './routes';

async function pluginName(fastify: FastifyInstance, opts: FastifyServerOptions) {
    // Registering routes
    registerRoutes(fastify, opts)
}

export default fp(pluginName, {
    fastify: '4.x',
    name: '@alea/plugin-skeleton',
    dependencies: ['@fastify/static']
})