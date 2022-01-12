'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Course, {foreignKey: 'courseId'})
      this.belongsTo(models.User, {foreignKey: 'userId'})
    }
  };
  Material.init({
    mtitle: DataTypes.STRING,
    mtype: DataTypes.INTEGER,
    duration: DataTypes.STRING,
    shortFileUrl: DataTypes.STRING,
    fileUrl: DataTypes.STRING,
    courseId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    ord: DataTypes.INTEGER
  }, {
    sequelize,
    // modelName: 'material',
    // underscored: true
  });
  return Material;
};