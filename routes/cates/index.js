'use strict'
/**
 * 
 * @param {import('fastify').FastifyInstance} fastify 
 * @param {*} opts 
 */
module.exports = async function (fastify, opts) {
  fastify.addSchema({
    $id: 'cates',
    params: {
      cate_id: { type: 'integer' }
    },
    response: {
      '2xx': {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          stitle: { type: 'string' },
          parent_id: { type: 'integer' }
        }
      }
    },
    definitions: {
      int: {
        type: 'integer'
      }
    }
  })

  const nestedObj = {
    schema: {
      response: {
        '2xx': {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'integer' },
              stitle: { type: 'string' },
              parent_id: { type: 'integer' },
              children: {
                type: 'array',
                items: { $ref: '#/items#' }
              }
            }
          }
        }
      }
    }
  }
  //index
  fastify.get('/', nestedObj, async function (request, reply) {
    let res = await fastify.db.Category.findAll({ raw: true, order: [['ord', 'desc'], 'id'] })
    let res1 = res.reduce((result, cur) => {
      if (cur.parent_id === 0) {
        result.push(cur)
      } else {
        let child_idx = -1
        let parent = result.find((item) => {
          if (item.id === cur.parent_id) return true
          if (item.children && item.children.length > 0) {
            let child = item.children.find((it1, idx) => {
              if (it1.id === cur.parent_id) {
                child_idx = idx
                return true
              }
              return false
            })
            if (child) return true
          }
          return false
        })
        if (parent) {
          if (child_idx == -1) {
            parent.children ||= []
            parent.children.push(cur)

          } else {
            parent.children[child_idx].children ||= []
            parent.children[child_idx].children.push(cur)
          }
        }

      }
      return result
    }, [])

    return res1

  })

  //show 
  fastify.get('/:cate_id', {
    schema: {
      params: {
        cate_idid: { type: 'integer' }
      },
      query: {
        page: { type: 'integer' }
      }
    }
  }, async function (request, reply) {
    let curPage = (request.query['page'] || 1) - 1
    // let res = await fastify.knex.from("courses").where('category_id', request.params.cate_id).orderBy('ord', 'desc').limit(this.setting.pageSize).offset(curPage * this.setting.pageSize)
    let res = await fastify.db.Course.findAll({
      where: { category_id: request.params.cate_id },
      order: [['ord', 'desc']],
      limit: this.setting.pageSize,
      offset: curPage * this.setting.pageSize,
      include: [{
        model: fastify.db.User,
        attributes: ['name', 'real_name', 'ulevel']
      }]
    })
    return res

  })

}
