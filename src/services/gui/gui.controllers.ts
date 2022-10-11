import GUIService from './gui.service';

/**
 * Controller class
 * Should handle query params, validation, and response
 * Should not implement service logic
 */
class GUIController {

    static index (req, reply) {
        const message = GUIService.index()
        reply.send(message)
    }

    static custom (req, reply) {
        return { message: 'Develop me' }
    }

};

export default GUIController