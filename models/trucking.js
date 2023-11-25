'use strict';
const bcrypt = require('bcryptjs'); 
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trucking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  trucking.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        },
    textBox: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    {
        sequelize,
    modelName: 'trucking',
    };
});

return trucking;
};
