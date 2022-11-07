import { FastifyRequest, FastifyReply } from 'fastify'

/**
 * TODO: file should exports in format 'hook': function()
 * eg: 'onRequest': onRequestHook , 'onPreValidation': onPreValidationHook , etc...
 */

const emptyHook = (req: FastifyRequest, reply: FastifyReply, done: any) => {
    done()
}

export default emptyHook