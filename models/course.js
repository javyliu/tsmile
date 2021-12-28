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
      this.belongsTo(models.User)
      this.belongsTo(models.Category)
    }
  };
  Course.init({
    ctitle: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    expiry_date: DataTypes.STRING,
    description: DataTypes.STRING,
    pic_img: DataTypes.STRING,
    click_count: DataTypes.INTEGER,
    is_recommend: DataTypes.BOOLEAN,
    clevel: DataTypes.INTEGER,
    dtype: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    ord: DataTypes.INTEGER,
    process: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Course',
    underscored: true,
  });
  return Course;
};