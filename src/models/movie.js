'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    static associate(models) {

    }
  }
  movie.init({
    name: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    releaseDate: DataTypes.DATEONLY,
    director: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};