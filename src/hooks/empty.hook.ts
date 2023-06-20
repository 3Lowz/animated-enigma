import { FastifyRequest, FastifyReply } from 'fastify'

/**
 * TODO: file should exports in format 'hook': function()
 * eg: 'onRequest': onRequestHook , 'onPreValidation': onPreValidationHook , etc...
 * Available Hooks:
 * onRequest, onResponse, preParsing, preValidation, preHandler, preSerialization, onSend, onTimeout, onError
 * 
 * // // Example with an array. All hooks support this syntax.
 * //
 * // preHandler: [function (request, reply, done) {
 * //   // This hook will always be executed after the shared `preHandler` hooks
 * //   done()
 * // }],
 */

const emptyHook = (req: FastifyRequest, reply: FastifyReply, done: any) => {
    done()
}

export default emptyHook