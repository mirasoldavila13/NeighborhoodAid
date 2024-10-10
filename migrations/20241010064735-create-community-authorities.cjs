'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Check if the table already exists
    const tableExists = await queryInterface.sequelize.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'CommunityAuthorities'
      );
    `);

    // If the table does not exist, create it
    if (!tableExists[0][0].exists) {
      await queryInterface.createTable('CommunityAuthorities', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        title: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        lat: {
          type: Sequelize.DOUBLE,
          allowNull: true,
        },
        lon: {
          type: Sequelize.DOUBLE,
          allowNull: true,
        },
        address: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
        city: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
        email: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        phone: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
        contacted: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.fn('now'),
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.fn('now'),
        },
      });
    }
  },

  down: async (queryInterface, Sequelize) => {
    // Drop the table if it exists
    await queryInterface.dropTable('CommunityAuthorities');
  },
};
