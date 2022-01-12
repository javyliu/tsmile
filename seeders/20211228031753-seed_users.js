'use strict';
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(8)
const pwd = bcrypt.hashSync('123123', salt)
let date = new Date()

const users = JSON.parse(fs.readFileSync('./teacher_data.json'))
users.sort((a,b) => a.id - b.id)
users.map(it => {
  return {
    oriUid: it.id,
    name: it.name,
    pwd: pwd,
    realName: it.name,
    headPic: it.head_pic,
    ulevel: 8,
    title: it.title,
    desc: it.desc,
    createdAt: date,
    updatedAt: date     
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


/**
 * @type {import('sequelize-cli').Migration}
 */
module.exports = {
  up: async (queryInterface, Sequelize) => {
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
    await queryInterface.bulkInsert('users', ary);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, { truncate: true });
  }
};
