'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Course)
      // define association here
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING(100), allowNull: false, unique: true,
      validate: {
        notNull: true,
        notEmpty: true,
        len: [4, 100]
      }
    },
    real_name: {
      type: DataTypes.STRING(100),
      len: [4, 100]
    },
    head_pic: DataTypes.STRING,
    pwd: DataTypes.STRING(50),
    title: DataTypes.STRING,
    desc: DataTypes.STRING,
    sign: DataTypes.STRING,
    token: DataTypes.STRING,
    points: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    sex: { type: DataTypes.INTEGER(1), defaultValue: 0 },
    phone: {
      type: DataTypes.STRING(15),
      validate: {
        is: /\d+/
      }
    },
    ulevel: { type: DataTypes.INTEGER(2), defaultValue: 0 },
    company: DataTypes.STRING,
    wechat_name: DataTypes.STRING(150),
    address: DataTypes.STRING,
    job: DataTypes.STRING,
    ord: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
    underscored: true,
  });
  return User;
};