#!/usr/bin/env node

import { request } from 'undici'
import * as cheerio from 'cheerio'
import * as fs from 'fs'

/**
 * const variables
 * 从原网站获取数据
 */

//fs.writeFileSync('course_data.json',JSON.stringify([1,2,3,4,5]), console.log)
//console.log("-------")
//
//process.exit(1)

const baseUrl = "http://www.tsmileedu.com"
const coursePath = "/course/explore"
const teacherPath = "/teacher"

let cates = null

//直接设置总页数
let totalPages = 6

/**
 * get course list
 *
 */

const getList = async (page) => {
  let currentPage = page
  let { statusCode, body } = await request(`${baseUrl}${coursePath}?page=${currentPage}`)

  let courseAry = []
  console.log("------return code: ", statusCode)
  let _html = await body.text()
  let $ = cheerio.load(_html)

  let promises = $(".course-item").map(async (i, it) => {
    console.log("------------", i)
    let item = await getDetail($(it).find("a").attr("href"))
    courseAry.push(item)
  })

  let pargroup = parAry(promises, 5)

  for (let idx = 0; idx < pargroup.length; idx++) {
    await Promise.all(pargroup[idx])
  }

  return courseAry
}

/**
 * 对原始数组按size大小分隔成二维数组
 * @param {[]}} oriAry 
 * @param {Integer} size 
 * @returns 
 */
const parAry = (oriAry, size) => {
  let ary = []
  let len = Math.ceil(oriAry.length / size)

  for (let idx = 0; idx < len; idx++) {
    let tmpAry = oriAry.slice(0, size)
    ary.push(oriAry.slice(idx * size, size * (idx + 1)))
  }

  return ary
}

/**
 * 得到课程详情
 * @param {String} path
 * @returns 
 */
const getDetail = async (path) => {
  let val = {}
  val.id = path.match(/\d+/)[0]

  console.log("------get request ", path)
  let detailRes = await request(`${baseUrl}${path}`, { maxRedirections: 2 })

  let detailBody = await detailRes.body.text()
  let cres = cheerio.load(detailBody)
  let detail = cres("#show-product-page").data("goods")

  val.category_id = getCateId(val.id)
  val.hitNum = detail.hitNum
  val.ctitle = detail.title
  val.minPrice = detail.minPrice
  val.maxPrice = detail.maxPrice
  val.description = detail.summary
  val.type = detail.type
  val.teachers = detail.specs.map(function (item) { return item.teachers }).flat(3)
  val.creator = detail.creator
  val.images = detail.images
  val.ord = detail.recommendWeight
  val.gooldId = detail.id
  val.subtitle = detail.subtitle
  val.usageMode = detail.specs[0].usageMode
  val.usageDays = detail.specs[0].usageDays
  val.usageStartTime = detail.specs[0].usageStartTime
  val.usageEndTime = detail.specs[0].usageEndTime

  return val
}

/**
 * 返回类别id
 * @param {String} idStr 
 * @returns 
 */
const getCateId = (idStr) => {
  for (let k in cates) {
    if (cates[k].includes(idStr)) {
      return k
    }
  }
  return 0;

}

/**
 * 按分页获得所有课程
 * @returns 
 */
const getCourse = async () => {

  if (!fs.existsSync("./cate_data.json")) {
    console.log("请先获取类别")
    process.exit(1)
  }

  if (!cates) {
    cates = JSON.parse(fs.readFileSync("./cate_data.json"))
  }

  setTotalPage(coursePath)

  let ary = []
  for (let index = 1; index <= totalPages; index++) {
    let items = await getList(index)
    console.log(`----第${index}页------`)
    ary.push(items)
  }
  console.log("for 循环结束")
  ary = ary.flat()

  fs.writeFileSync('course_data.json', JSON.stringify(ary), console.log)
  return ary
}

/**
 * 得到总页数
 * @param {String} path 
 */
const setTotalPage = async (path) => {
  let { statusCode, body } = await request(`${baseUrl}${path}`)

  console.log("--得到总页面----return code: ", statusCode)
  let _html = await body.text()
  let $ = cheerio.load(_html)

  totalPages = parseInt($(".pagination a:last").attr("href").match(/\d+/)[0])
  console.log("====total pages: ", totalPages)

}

/**
 * 得到讲师列表
 * @param {Integer} page 
 * @returns 
 */
const getTeacherList = async (page) => {
  let currentPage = page
  let { statusCode, body } = await request(`${baseUrl}${teacherPath}?page=${currentPage}`)

  let teacherAry = []
  console.log("------return code: ", statusCode)
  let _html = await body.text()
  let $ = cheerio.load(_html)

  let promises = $(".teacher-img").map(async (i, it) => {
    console.log("------------", i)
    let item = await getTeacherDetail($(it).attr("href"))
    teacherAry.push(item)
  })

  let pargroup = parAry(promises, 5)

  for (let idx = 0; idx < pargroup.length; idx++) {
    await Promise.all(pargroup[idx])
  }

  return teacherAry
}

/**
 * 获取讲师详情
 * @param {String} path 
 * @returns 
 */
const getTeacherDetail = async (path) => {

  let val = {}
  val.id = parseInt(path.match(/\d+/)[0])

  console.log("------get request ", path)
  let detailRes = await request(`${baseUrl}${path}`)

  let detailBody = await detailRes.body.text()

  // fs.writeFileSync("tmp_user.html", detailBody, console.log)
  let cres = cheerio.load(detailBody)
  val.head_pic = baseUrl + cres(".user-avatar img").attr("src")
  val.name = cres(".user-avatar .name").text().trim()
  val.title = cres(".user-avatar .mrm:first").text().trim()
  val.real_name = val.name

  let course_ids = []
  course_ids.push(...getUserCourseIds(cres))

  let pages = cres(".pagination a:not(:first)")
  if (pages.length > 0) {
    for (let idx = 0; idx < pages.length; idx++) {
      let _url = cres(pages[idx]).attr("href");
      let _res = await request(`${baseUrl}${_url}`)
      let _che = cheerio.load(await _res.body.text())
      course_ids.push(...getUserCourseIds(_che))
    }
  }

  val.course_ids = course_ids

  let aboutRes = await request(`${baseUrl}${path}/about`)

  let aboutBody = cheerio.load(await aboutRes.body.text())
  val.desc = aboutBody(".editor-text").text()


  return val
}

/**
 * 得到页面课程id
 * @param {Cheerio object} cheerioPage 
 * @returns 
 */
const getUserCourseIds = (cheerioPage) => {
  let course_ids = []
  cheerioPage(".course-info .link-dark").each((it, ele) => {
    let href = cheerioPage(ele).attr("href")
    let n = href.replace(/[^\d]+/g, '')
    course_ids.push(parseInt(n))
  })
  return course_ids
}

/**
 * 
 * @returns 讲师列表
 */
const getTeachers = async () => {
  await setTotalPage(teacherPath)

  let ary = []
  for (let index = 1; index <= totalPages; index++) {
    let items = await getTeacherList(index)
    console.log(`----第${index}页------`)
    ary.push(...items)
  }

  console.log("for 循环结束")

  fs.writeFileSync('teacher_data.json', JSON.stringify(ary), console.log)
  return ary

}

/**
 * 得到所有教程类别
 * @returns 
 */
const getCates = async () => {
  // await setTotalPage(coursePath)

  let cateListPage = await request(baseUrl + coursePath)
  let $ = cheerio.load(await cateListPage.body.text())
  let navList = $(".tabs-group a")


  cates = {}

  for (let idx = 0; idx < navList.length; idx++) {
    if (idx === 0) continue
    cates[idx] = []
    const href = navList[idx].attribs.href;
    let pcontent = await request(baseUrl + href)
    let pbody = cheerio.load(await pcontent.body.text())
    let _ary = pbody(".course-item .course-img a").map((k, v) => v.attribs.href.match(/\d+/))
    cates[idx].push(..._ary)

    let page_hrefs = pbody(".navigation a")
    if (page_hrefs.length > 1) {
      for (let index = 1; index < page_hrefs.length; index++) {
        let pcontent1 = await request(baseUrl + page_hrefs[index].attribs.href)
        let pbody1 = cheerio.load(await pcontent1.body.text())
        let _ary1 = pbody(".course-item .course-img a").map((k, v) => v.attribs.href.match(/\d+/))
        cates[idx].push(..._ary1)
      }
    }

    console.log(cates[idx])
  }



  console.log("for 循环结束", cates)

  fs.writeFileSync('cate_data.json', JSON.stringify(cates), console.log)
  return cates

}


//////////////////////////////////////////
//得到所有课程类别
// await getCates()
//////////////////////////////////////////


//////////////////////////////////////////
//得到所有课堂
// await getCourse()
// console.log("the result is in the course_data.json")
//////////////////////////////////////////


//////////////////////////////////////////
//得到所有讲师
await getTeachers()
//////////////////////////////////////////



const fruitBasket = {
  apple: 27,
  grape: 0,
  pear: 14
};
const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
};

const getNumFruit = async fruit => {
  const v = await sleep(1000)
  return fruitBasket[fruit]
};



const fruitsToGet = ['apple', 'grape', 'pear']


const forLoop = async _ => {
  console.log('start');

  for (let index = 0; index < fruitsToGet.length; index++) {
    const fruit = fruitsToGet[index];
    const numFruit = await getNumFruit(fruit);
    console.log(numFruit);
  }
  console.log('End')
}


// forLoop()