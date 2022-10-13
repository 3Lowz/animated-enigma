import fp from "fastify-plugin"
import registerRoutes from './routes'

async function pluginSkeleton(fastify, opts) {
    // Registering routes
    registerRoutes(fastify)

    console.log(`fastify gui prop:`)
    console.log(fastify.gui)

    fastify.gui['plugin-skeleton'] = {}
    
}

export default fp(pluginSkeleton, {
    fastify: '4.x',
    name: '@alea/plugin-skeleton',
    dependencies: ['@fastify/static']
})