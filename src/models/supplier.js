'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class supplier extends Model {

    static associate(models) {
      this.belongsToMany(
        models.product, 
        { through: 'productsSuppliers' }
      );
    }

  }
  supplier.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'supplier',
  });
  return supplier;
};