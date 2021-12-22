'use strict'

/**
 * 
 * @param {import('fastify').FastifyInstance} fastify 
 * @param {*} opts 
 */
module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {

    return { header: request.headers }
  })

  fastify.get('/profiles', async function (request, reply) {

    // const res= await fastify.axios.wx.post('/wxa/msg_sec_check', JSON.stringify({
    //   content: "安全检查测试文本"
    // }))
    const { body } = await fastify.wxClient.request({
      path: '/wxa/msg_sec_check', method: 'POST', body: JSON.stringify({
        content: "安全检查测试文本"
      })
    })
    // const res= await fastify.axios.pip.get('/games')

 
    return body.json() || 'no content'
  })

  fastify.get('/games', async function (request, reply) {

    const res = await fastify.pipClient.request({ path: '/api/v1/games', method: 'GET' })

    var body = await res.body.json()

    console.log("-----------------")
    fastify.log.info(JSON.stringify(body))
    console.log("-----------------")
    return body || 'no content'
  })


}

