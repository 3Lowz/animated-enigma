import { FastifyRequest, FastifyReply } from 'fastify'

/**
 * Available Hooks:
 * onRequest, onResponse, preParsing, preValidation, preHandler, preSerialization, onSend, onTimeout, onError
 *
 * // Example with an array. All hooks support this syntax.
 *
 * preHandler: [function (request, reply, done) {
 *   // This hook will always be executed after the shared `preHandler` hooks
 *   done()
 * }],
 */

const emptyHook = (req: FastifyRequest, reply: FastifyReply, done: any) => {
  // Read request['Authorization'] header & validate Bearer token
  done()
}

export default emptyHook
