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
    await queryInterface.bulkInsert('Categories', [
      {id: 1,parentId: 0 , stitle: '口腔影像学'},     
      {id: 2,parentId: 0 , stitle: '美学修复'},
      {id: 3,parentId: 0 , stitle: '颞下颌关节'},
      {id: 4,parentId: 0 , stitle: '牙齿磨耗'},
      {id: 5,parentId: 0 , stitle: '牙周'},
      {id: 6,parentId: 0 , stitle: '正畸'},
      {id: 7,parentId: 0 , stitle: '种植'},

      {id: 8,parentId: 1 , stitle: '根尖片'},
      {id: 9,parentId: 1 , stitle: '曲面断层片'},
      {id: 10,parentId: 1 , stitle: '关节片'},
      {id: 11,parentId: 1 , stitle: 'CBCT'},

      {id: 12,parentId: 2 , stitle: '牙体缺损'},
      {id: 13,parentId: 2 , stitle: '牙周软组织'},
      {id: 14,parentId: 2 , stitle: '微创'},
      {id: 15,parentId: 2 , stitle: '牙体预备'},

      {id: 16,parentId: 4 , stitle: '磨损'},
      {id: 17,parentId: 4 , stitle: '酸蚀症'},
      
      {id: 18,parentId: 5 , stitle: '牙周基础治疗'},
      {id: 19,parentId: 5 , stitle: '牙周手术'},

      {id: 20,parentId: 6 , stitle: '隐形正畸'},

      {id: 21,parentId: 7 , stitle: '植骨'},
      {id: 22,parentId: 7 , stitle: '软组织'},
      {id: 23,parentId: 7 , stitle: '数字化'},

      {id: 24,parentId: 12 , stitle: '全瓷冠'},
      {id: 25,parentId: 12 , stitle: '瓷贴面'},
      {id: 26,parentId: 12 , stitle: '嵌体'},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkDelete('Categories', null, {truncate: true});
  }
};
