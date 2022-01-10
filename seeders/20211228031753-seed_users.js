'use strict';
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(8)
const pwd = bcrypt.hashSync('123123', salt)

const users = JSON.parse(fs.readFileSync('./teacher_data.json'))
users.sort((a,b) => a.id - b.id)
users.map(it => {
  return {
    ori_uid: it.id,
    name: it.name,
    pwd: pwd,
    real_name: it.name,
    head_pic: it.head_pic,
    ulevel: 8,
    title: it.title,
    desc: it.desc,
    created_at: date,
    updated_at: date    
  }

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
    let date = new Date()
    console.log("-----------------", pwd, "----length:", pwd.length)
    let ary = [{
      id: '1',
      name: 'admin',
      pwd: bcrypt.hashSync('Javy123123', salt),
      real_name: 'quanliu',
      head_pic: '',
      ulevel: 1,
      title: '管理员',
      desc: '管理员',
      sign: '签名',
      company: '',
      created_at: date,
      updated_at: date
    },]
    users.forEach(eles => {
      let u = { pwd: pwd }
      u.id = eles[0]
      u.name = eles[1]
      u.real_name = eles[2]
      u.head_pic = eles[3]
      u.ulevel = eles[4]
      u.title = eles[5]
      u.desc = eles[6]
      u.created_at = date
      u.updated_at = date
      ary.push(u)
    });
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
