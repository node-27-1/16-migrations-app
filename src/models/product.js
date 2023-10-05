'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    
    static associate(models) {
      this.belongsTo(models.category);

      this.belongsToMany(
        models.supplier,
        { through: 'productsSuppliers' }
      );
    }
  }
  product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: DataTypes.INTEGER,
    is_available: DataTypes.BOOLEAN,
    brand: DataTypes.STRING,
    // categoryId: integer
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};