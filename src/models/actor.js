'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class actor extends Model {
    
    static associate(models) {
      this.belongsToMany(models.movie, {
        through: 'moviesActors',
      })
    }
  }
  actor.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    nationality: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'actor',
  });
  return actor;
};