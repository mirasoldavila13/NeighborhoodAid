"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { DataTypes } = Sequelize;

    // Check if the table already exists
    const tableExists = await queryInterface.sequelize.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'Feeds'
      );
    `);

    // If the table does not exist, create it
    if (!tableExists[0][0].exists) {
      await queryInterface.createTable("Feeds", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        content: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        likes: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: Sequelize.fn('now'),
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: Sequelize.fn('now'),
        },
      });
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Feeds");
  },
};
