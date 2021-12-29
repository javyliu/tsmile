'use strict'
/**
 * 
 * @param {import("fastify").FastifyInstance} fastify 
 * @param {*} opts 
 */
module.exports = async function (fastify, opts) {
  fastify.addSchema({
    $id: 'users',
    params: {
      properties: {
        id: { type: 'integer' }
      },
      required: ['id']
    },
    response: {
      '2xx': {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          ulevel: { type: 'integer' },
          real_name: { type: 'string' },
          head_pic: { type: 'string' },
          title: { type: 'string' },
          desc: { type: 'string' },
        }
      }
    }

  })
  //index
  fastify.get('/', {
    schema: {
      querystring: {
        type: 'object',
        properties: {
          page: {type:'integer'},
          ulevel: {type: 'integer'}
        }
      },
      response: {
        '2xx': {
          type: 'array',
          items: {
            $ref: 'users#/response/2xx'
          }
        }
      }
    }
  }, async function (request, reply) {
    let curPage = request.query['page'] || 1
    let where = {}
    if (request.query['ulevel']) {
      where.ulevel = request.query.ulevel
    }

    return await fastify.db.User.scope({method: ['page', curPage]}).findAll({
      order: [['ord', 'desc']],
      where
    })
  })

  //show
  fastify.get('/:id', {
    schema: {
      params: {
        $ref: 'users#/params'
      },
      response: {
        '2xx': {
          $ref: 'users#/response/2xx'
        }
      }
    }
  }, async function (request, reply) {
    // const user = await fastify.knex.where('id', request.params.id).from('users').first()
    let user = await fastify.db.User.findByPk(request.params.id)

    return user
  })

}
