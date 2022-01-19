'use strict'
/**
 * 
 * @param {import('fastify').FastifyInstance} fastify 
 * @param {*} opts 
 */
module.exports = async function (fastify, opts) {

  await fastify.register(require('../plugins/spec_plg_jwt'))
  // fastify.addHook("onRequest", fastify.authenticate)



  fastify.get('/', async function (request, reply) {
    // let u1 = null
    // try {
    //   u1 = await fastify.db.User.create({
    //     name: request.query.name || 'hello1', pwd: '123123',
    //     user_courses: [{ course_id: 1 }, { course_id: 2 }]
    //   },
    //     {
    //       include: [
    //         {
    //           association: fastify.db.User.associations.UserCourses
    //         }
    //       ]
    //     })

    // } catch (err) {
    //   throw err.errors || err

    // }


    // return u1
    return { header: request.headers }
  })

  fastify.get('/profiles', async function (request, reply) {

    // const res= await fastify.axios.wx.post('/wxa/msg_sec_check', JSON.stringify({
    //   content: "安全检查测试文本"
    // }))
    const { body } = await fastify.wxClient.request({
      path: '/wxa/msg_sec_check',
      method: 'POST',
      body: JSON.stringify({
        content: "安全检查测试文本"
      })
    })
    // const res= await fastify.axios.pip.get('/games')


    return body.json() || 'no content'
  })

  /**
   * 需要用户有授权token方可使用
   */
  fastify.get('/games', {
    onRequest: fastify.authenticate,
  }, async function (request, reply) {

    const { body } = await fastify.pipClient.request({ path: '/api/v1/games', method: 'GET' })
    console.log('--------request.user', request.user)

    var jbody = await body.json()

    console.log("-----------------")

    console.log("-----------------")
    return jbody || 'no content'
  })

  //跳转到页面
  fastify.get('/to', async function (request, reply) {
    reply.redirect('http://m.pipgame.com')
  })


  /**
   * 用于分发token, 正常需要提供几号名及密码，在微信生态圈只需验证用户授权后提交的token即可 
   */
  const authSchema = {
    schema: {
      body: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          password: { type: 'string' }
        },
        required: ['name', 'password']

      }
    }
  }
  /**
   * 如何在async回调中设置header?
   */
  fastify.post('/authme', authSchema, async function (request, reply) {
    console.log("--------------")
    console.log(request.body)
    let user = await fastify.db.User.findOne({
      where: { name: request.body.name }
    })
    if (user) {
      let is_valid = await fastify.bcrypt.compare(request.body.password, user.pwd)
      if (is_valid) {
        let token = await reply.jwtSign({ uid: 1 })
        console.log(token)
        reply.header('token', token)
        return { token }

      } else {
        throw { statusCode: 402, message: '密码错误' }
      }
    } else {
      throw { statusCode: 401, message: '用户不存在' }
    }

  })
}

