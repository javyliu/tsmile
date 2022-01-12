'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {as: 'Creator', foreignKey: 'userId'})
      this.belongsTo(models.Category, {foreignKey: 'categoryId'})
      this.belongsToMany(models.User, {as: 'Teachers',foreignKey: 'courseId', otherKey: 'userId', through: models.UserCourse})
    }
  };
  Course.init({
    ctitle: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    expiryDate: DataTypes.STRING,
    description: DataTypes.STRING,
    picImg: DataTypes.STRING,
    clickCount: DataTypes.INTEGER,
    isRecommend: DataTypes.BOOLEAN,
    clevel: DataTypes.INTEGER,
    dtype: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    ord: DataTypes.INTEGER,
    process: DataTypes.BOOLEAN
  }, {
    sequelize,
    // modelName: 'course',
    // underscored: true,
  });
  return Course;
};