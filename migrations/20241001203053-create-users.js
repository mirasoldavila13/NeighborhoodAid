'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("issues", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      location: {
        type: Sequelize.GEOMETRY("POINT"), // Stores coordinates
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM("reported", "in progress", "resolved"),
        allowNull: false,
      },
      assignedUserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("issues");
  },
};