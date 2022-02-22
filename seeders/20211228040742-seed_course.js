'use strict';

const fs = require("fs")
let courses = JSON.parse(fs.readFileSync('./course_data.json'))
courses.sort((a,b) => a.id - b.id)

let date = new Date()
courses = courses.map(it => {
  return {
    id: it.id,
    ctitle: it.ctitle,
    price: it.minPrice,
    description: it.description,
    picImg: it.images.imgCloudId,
    clickCount: it.hitNum,
    clevel: 2,
    isRecommend: 1,
    dtype: 1,
    categoryId: it.category_id,
    userId: 0,
    ord: it.ord,
    process: 1,
    createdAt: date,
    updatedAt: date
  }
})

module.exports = {
  up: async (queryInterface, Sequelize) => {   
    await queryInterface.bulkInsert('Courses', courses)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Courses',null, {truncate: true})
  }
};
