'use strict'
const fp = require('fastify-plugin')

/**
* @param {import('fastify').FastifyInstance} fastify 
* @param {*} opts 
*/
async function plg(fastify, opts) {
  fastify.register(require('fastify-bcrypt'), {saltWorkFactor: 8})
}




module.exports = fp(plg)