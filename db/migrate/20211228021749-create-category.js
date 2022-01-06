'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stitle: {
        type: Sequelize.STRING(100)
      },
      parent_id: {
        type: Sequelize.INTEGER(2)
      },
      ord: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      }    
    });

    await queryInterface.addIndex("categories", ['parent_id'])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('categories');
  }
};