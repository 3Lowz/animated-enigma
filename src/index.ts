import fp from "fastify-plugin"
import registerRoutes from './routes'

async function pluginName(fastify, opts) {
    // Registering routes
    registerRoutes(fastify)
}

export default fp(pluginName, {
    fastify: '4.x',
    name: '@alea/plugin-base-template',
    dependencies: ['@fastify/static']
})