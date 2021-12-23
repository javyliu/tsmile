'use strict'
/**
 * 
 * @param {import('fastify').FastifyInstance} fastify 
 * @param {*} opts 
 * @param {*} next 
 */
module.exports = async function (fastify, opts, next) {
  //课程列表
  fastify.get('/', async function (request, reply) {
    let res = await fastify.db.from("courses")

    console.log("---opts: ", opts)

    return res
  })

}


