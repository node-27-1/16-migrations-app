'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    static associate(models) {
      this.belongsTo(models.genre);

      this.belongsToMany(models.actor, {
        through: 'moviesActors',
      })
    }
  }
  movie.init({
    name: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    releaseDate: DataTypes.DATE,
    director: DataTypes.STRING,
    // genreId:
  }, {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};