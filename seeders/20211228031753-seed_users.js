'use strict';
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(8)
const pwd = bcrypt.hashSync('123123', salt)
let date = new Date()
const fs = require("fs")

let users = JSON.parse(fs.readFileSync('./teacher_data.json'))
users.sort((a,b) => a.id - b.id)
users = users.map(it => {
  return {
    oriUid: it.id,
    name: it.name,
    pwd: pwd,
    realName: it.name,
    headPic: it.imgCloudId,
    ulevel: 8,
    title: it.title,
    desc: it.desc,
    createdAt: date,
    updatedAt: date,
    course_ids: it.course_ids    
  }
})

//添加管理员
users.unshift({    
  name: 'admin',
  pwd: bcrypt.hashSync('Javy123123', salt),
  realName: 'quanliu',
  headPic: '',
  ulevel: 1,
  title: '管理员',
  desc: '管理员',
  sign: '签名',
  createdAt: date,
  updatedAt: date
})

let user_courses = []
//设置id
users.forEach((ele,idx) => {
  ele.id = idx + 1
  if (ele.course_ids && ele.course_ids.length > 0) {
    ele.course_ids.forEach( it => {
      let tmp = {}
      tmp.userId = ele.id
      tmp.courseId = it
      user_courses.push(tmp)
    })    
  } 
  delete ele.course_ids
});
// console.log(users)

/**
 * @type {import('sequelize-cli').Migration}
 */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    console.log("-----test pipline------migrate up")

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    
    // await queryInterface.sequelize.query('truncate users;')
    await queryInterface.bulkInsert('Users', users);
    await queryInterface.bulkInsert('UserCourses', user_courses);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, { truncate: true });
    await queryInterface.bulkDelete('UserCourses', null, { truncate: true });
  }
};
