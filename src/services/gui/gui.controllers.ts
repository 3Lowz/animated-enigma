import { FastifyRequest, FastifyReply } from 'fastify'
import GUIService from './gui.service'

/**
 * Controller class
 * Should handle query params, validation, and response
 * Should not implement service logic
 */
class GUIController {

    static index (req: FastifyRequest, reply: FastifyReply) {
        const message = GUIService.index()
        reply.send(message)
    }

    static custom (req: FastifyRequest, reply: FastifyReply) {
        return { message: 'Develop me' }
    }

};

export default GUIController