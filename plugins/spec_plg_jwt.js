'use strict'
const fp = require('fastify-plugin')

/**
* @param {import('fastify').FastifyInstance} fastify 
* @param {*} opts 
*/
async function plg(fastify, opts) {
  fastify.register(require('fastify-jwt'), {
    secret: 'f7284181698da718f771f5d8d46d367151fa3546ffc7747e6798363be1b7a61b1d9c608e3f9cafc81',
    sign: {
      expiresIn: '1 day'
    }
  })

  fastify.decorate('authenticate', async function (request, reply) {
    console.log(request.headers)

    try {
      await request.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })

}




module.exports = fp(plg)