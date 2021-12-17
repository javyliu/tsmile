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
      id: { type: 'integer' }
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
    }
  })
  fastify.get('/', async function (request, reply) {
    let res = await fastify.db.from("categories")
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



}
