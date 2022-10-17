import fp from "fastify-plugin"
import registerRoutes from './routes'

async function pluginSkeleton(fastify, opts) {
    // Registering routes
    registerRoutes(fastify)
}

export default fp(pluginSkeleton, {
    fastify: '4.x',
    name: '@alea/plugin-skeleton',
    dependencies: ['@fastify/static']
})



/**
 * Webpack Federation object
 *      {
            name: 'MD1',
            filename: 'module1.js',
            exposes: {
                './Index': './src/Components/Module1Index.js'
            },
            shared: ["react", "react-dom","react-router-dom", "reactstrap"]
        }
 */