'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('moviesActors', {
      actorId: {
	      type: Sequelize.INTEGER,
	      references: {
	        model: 'actors', 
	        key: 'id', 
	      },
	      onUpdate: 'CASCADE',
	      onDelete: 'SET NULL',
				primaryKey: true
	    },
      movieId: {
	      type: Sequelize.INTEGER,
	      references: {
	        model: 'movies', 
	        key: 'id', 
	      },
	      onUpdate: 'CASCADE',
	      onDelete: 'SET NULL',
				primaryKey: true
	    },
			createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('moviesActors');
  }
};
