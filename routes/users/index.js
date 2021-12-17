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
    return await fastify.db.from('users')
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
    const user = await fastify.db.where('id', request.params.id).from('users').first()

    return user
  })

}
