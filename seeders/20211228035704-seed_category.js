'use strict';

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
    await queryInterface.bulkInsert('categories', [
      {id: 1,parent_id: 0 , stitle: '口腔影像学'},     
      {id: 2,parent_id: 0 , stitle: '美学修复'},
      {id: 3,parent_id: 0 , stitle: '颞下颌关节'},
      {id: 4,parent_id: 0 , stitle: '牙齿磨耗'},
      {id: 5,parent_id: 0 , stitle: '牙周'},
      {id: 6,parent_id: 0 , stitle: '正畸'},
      {id: 7,parent_id: 0 , stitle: '种植'},

      {id: 8,parent_id: 1 , stitle: '根尖片'},
      {id: 9,parent_id: 1 , stitle: '曲面断层片'},
      {id: 10,parent_id: 1 , stitle: '关节片'},
      {id: 11,parent_id: 1 , stitle: 'CBCT'},

      {id: 12,parent_id: 2 , stitle: '牙体缺损'},
      {id: 13,parent_id: 2 , stitle: '牙周软组织'},
      {id: 14,parent_id: 2 , stitle: '微创'},
      {id: 15,parent_id: 2 , stitle: '牙体预备'},

      {id: 16,parent_id: 4 , stitle: '磨损'},
      {id: 17,parent_id: 4 , stitle: '酸蚀症'},
      
      {id: 18,parent_id: 5 , stitle: '牙周基础治疗'},
      {id: 19,parent_id: 5 , stitle: '牙周手术'},

      {id: 20,parent_id: 6 , stitle: '隐形正畸'},

      {id: 21,parent_id: 7 , stitle: '植骨'},
      {id: 22,parent_id: 7 , stitle: '软组织'},
      {id: 23,parent_id: 7 , stitle: '数字化'},

      {id: 24,parent_id: 12 , stitle: '全瓷冠'},
      {id: 25,parent_id: 12 , stitle: '瓷贴面'},
      {id: 26,parent_id: 12 , stitle: '嵌体'},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkDelete('categories', null, {truncate: true});
  }
};
