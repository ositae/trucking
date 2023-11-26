// create model 'holder' for database of
// cdl holder users
'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class holder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
holder.init({
  id: {      // id automatically created to organize users
    type: DataTypes.INTEGER, 
    allowNull: false,
    primaryKey: true,
  },
  truckBrand: {      // favorite truck brand of the user
    type: DataTypes.STRING,
    allowNull: true,
  },
  truckTrans: {     // favorite transmission of truck for user
    type: DataTypes.STRING,
    allowNull: true,
  },
  workType: {    // local, regional, otr
    type: DataTypes.STRING,
    allowNull: true,
  },
  truckType: {   // trailer or straight job
    type: DataTypes.STRING,
    allowNull: true,
},
}, {
sequelize,
modelName: 'holder',
tableName: 'user'
});
return holder;
};
