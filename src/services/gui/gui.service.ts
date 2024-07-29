/**
 * Example GUI service
 */
class GuiService {
  index() {
    return { message: 'Base service' }
  }

  details() {
    return { message: 'Get fastify details' }
  }
}

export default GuiService
