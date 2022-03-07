'use strict'
const fs = require('fs')
const FormData = require('form-data')
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

  /**
   * 换成axios后终于好了，undici还是文档少，找不到post formdata的方法
   */
  fastify.get('/startUpload', async function (request, reply) {
    console.log("start upload file");

    // var { body } = await fastify.undici.request({
    //   path: '/tcb/uploadfile',
    //   method: 'POST',
    //   body: JSON.stringify({
    //     env: 'prod-8gss4ruj6b2f1e24',
    //     path: "pics/image_2.jpg"
    //   })
    // })

    var res = await fastify.axios.wx.post('/tcb/uploadfile', {
      env: 'prod-8gss4ruj6b2f1e24',
      path: "pics/image_3.jpg"
    })

    // var jbody = await body.json()
    var jbody = res.data

    console.log(jbody)

    var file = fs.createReadStream(`${process.cwd()}/image_1.jpg`);
    console.log("---------file pwd:", process.cwd())

    // const fData = new fastify.undici.FormData()
    const fData = new FormData()
    fData.append("key", "pics/image_3.jpg")
    fData.append("Signature", jbody.authorization)
    fData.append("x-cos-security-token", jbody.token)
    fData.append("x-cos-meta-fileid", jbody.cos_file_id)
    fData.append("file", file)

    // var res = await fastify.undici.fetch(jbody.url, {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'multipart/form-data;'
    //   },
    //   body: JSON.stringify({
    //     "key": "pics/image_2.jpg",
    //     "Signature": jbody.authorization,
    //     "x-cos-security-token": jbody.token,
    //     "x-cos-meta-fileid": jbody.cos_file_id,
    //     "file": file
    //   })
    // })

    var res = await fastify.axios.post(jbody.url, fData, { headers: fData.getHeaders() })


    console.log("-----------", res)

    return jbody || 'no content'
  })
}

// curl --location --request POST 'https://cos.ap-shanghai.myqcloud.com/656e-env01-1gn1foc87d62f49f-1308356531/pics/image_2.jpg' \
// --form 'key="pics/image_2.jpg"' \
// --form 'Signature="q-sign-algorithm=sha1&q-ak=AKIDJQdNxLmIFVrFeGpL8VZ3A67yYfUNy5E3FYfPbtkGiLV8SBBkmozQn4S4JlXW8t5v&q-sign-time=1645091736;1645092636&q-key-time=1645091736;1645092636&q-header-list=&q-url-param-list=&q-signature=b434996522a1a914853c321b7b32bde593bdd69a"' \
// --form 'x-cos-security-token="gLbu4GRHdy7JY1wO5fW1LHqyXRlXSXya61eea49340f2c1319556a0551f98d9f8wpkG2bn0daKd5CUxjf5QPU0I9qKIg56WTk2LJGgeSYjdC2SjFckhwKjH3XlnBRiZc9eGF1Q9Bu0o_iudiqVU4V_gp7M0rNZkvAVSR1XT7TO-_E4Pw2cMlEqDquWn0V5ygJ-5Eq97kDYt94gVLHRAKHPHoMX2pXH4uwqT_j0kkLSwLPzsohA-Iv37S7fgLX5tpiSuUSsYIv7t3-sHWMPr_UZiHvGfuHrD61Ol3RjaxkCdkRcTdz6yvdLalsVGYRhSyiin7C6KfleO3-aJuS1G5Wb1bIPi8iSZHX-NbUcLQXP0IRsZ2AIuNjORwf45XgCILGMXxKJz6WCVzP191NsdL440F9aG0K9nXgMepUberes"' \
// --form 'x-cos-meta-fileid="cloud://env01-1gn1foc87d62f49f.656e-env01-1gn1foc87d62f49f-1308356531/pics/image_2.jpg"' \
// --form 'file=@"./image_1.jpg"'
