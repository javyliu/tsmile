'use strict'
/**
 * 
 * @param {import('fastify').FastifyInstance} fastify 
 * @param {*} opts 
 */
module.exports = async function (fastify, opts) {
  //课程列表
  fastify.get('/', async function (request, reply) {
    let res = await fastify.db.from("courses")
    fastify.
    
    console.log("---opts: ", opts)

    return res
  })

}


