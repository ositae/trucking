'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class holderStyle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  holderStyle.init({
    truckBrand: DataTypes.STRING,
    truckTrans: DataTypes.STRING,
    workType: DataTypes.STRING,
    truckType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'holderStyle',
  });
  return holderStyle;
};