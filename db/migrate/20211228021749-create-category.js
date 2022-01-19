'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stitle: {
        type: Sequelize.STRING(100)
      },
      parentId: {
        type: Sequelize.INTEGER(2)
      },
      ord: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      }    
    });

    await queryInterface.addIndex("Categories", ['parentId'])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Categories');
  }
};