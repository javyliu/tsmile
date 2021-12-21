'use strict'

/**
 * 
 * @param {import('fastify').FastifyInstance} fastify 
 * @param {*} opts 
 */
module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {

    return { header: request.headers}
  })

  fastify.get('/profiles', async function (request, reply) {

    const res= await fastify.axios.wx.post('/wxa/msg_sec_check', JSON.stringify({
      content: "安全检查测试文本"
    }))
    
    // const res= await fastify.axios.pip.get('/games')

    console.log("-----------------")
    fastify.log.info(res.data)
    console.log("-----------------")
    return res.data || 'no content'
  })


 

}

