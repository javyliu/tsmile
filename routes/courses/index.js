'use strict'
/**
 * 
 * @param {import('fastify').FastifyInstance} fastify 
 * @param {*} opts 
 */
module.exports = async function (fastify, opts) {
  //index, 可传 page 参数进行分页
  fastify.get('/', {
    schema: {
      querystring: {
        page: {
          type: 'integer',
        }
      }
    }
  }, async function (request, reply) {
    console.log("------page:", request.query['page'])
    let curPage = (request.query['page'] || 1) - 1
    console.log("-------curPage:", curPage, this.setting.pageSize);
    let res = await fastify.knex.from("courses").orderBy('id', 'desc').limit(this.setting.pageSize).offset(curPage * this.setting.pageSize)


    return res
  })


  //show
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
    return await fastify.knex.from("courses").where("id", request.params.id)
  })
}

