import BaseService from './base.service';

/**
 * Controller class
 * Should handle query params, validation, and response
 * Should not implement service logic
 */
class BaseController {

    static index (req, reply) {
        const message = BaseService.index()
        reply.send(message)
    }

    static custom (req, reply) {
        return { message: 'Develop me' }
    }

};

export default BaseController