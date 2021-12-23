'use strict'
module.exports = async function (fastify, opts, next) {

  fastify.get("/:id", {
    schema: {
      params: {
        type: 'object',
        properties: {
          id: { type: 'integer' }
        }
      }
    }
  }, async (request, reply) => {
    return await fastify.db.from("courses").where("id", request.params.id)
  })
}
