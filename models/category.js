'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Course, {foreignKey: 'categoryId'})
      this.hasMany(models.Category, {
        as: 'Children',
        foreignKey: 'parentId'
      })
    }
  };
  Category.init({
    stitle: DataTypes.STRING(100),
    parentId: DataTypes.INTEGER,
    ord: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
  }, {
    sequelize,
    // modelName: 'category',
    // underscored: true,
    timestamps: false,
  });
  return Category;
};