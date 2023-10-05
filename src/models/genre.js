'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class genre extends Model {
    
    static associate(models) {
      this.hasMany(models.movie);
    }
  }
  genre.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'genre',
  });
  return genre;
};