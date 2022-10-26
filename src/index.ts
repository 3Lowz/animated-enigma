import { FastifyInstance, FastifyServerOptions } from "fastify";
import fp from "fastify-plugin";
import registerRoutes from './routes';

async function moduleName(fastify: FastifyInstance, opts: FastifyServerOptions, done: any) {
    
    // Registering routes
    registerRoutes(fastify, opts)

    done()
}

export default fp(moduleName, {
    fastify: '4.x',
    name: '@alea-module/skeleton-react',
    dependencies: ['@fastify/static']
})