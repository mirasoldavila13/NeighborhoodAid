"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Check if the table already exists
    const tableExists = await queryInterface.sequelize.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'Users'
      );
    `);

    // If the table does not exist, create it
    if (!tableExists[0][0].exists) {
      await queryInterface.createTable("Users", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false, // Email is required
          unique: true, // Email must be unique
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false, // Password is required
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('now'), // Default to the current timestamp
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('now'), // Default to the current timestamp
        },
      });
    }
  },

  async down(queryInterface, Sequelize) {
    // Drop the table if it exists
    await queryInterface.dropTable("Users");
  },
};
