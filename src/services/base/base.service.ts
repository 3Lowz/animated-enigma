/**
 * Class service
 */
class BaseService {
    static index () {
        return { message: 'Base service' }
    }

    static details () {
        return { message: 'Get fastify details' }
    }
}

export default BaseService