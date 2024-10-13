'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('ReportAuthorities', 'status', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'Open', // Set default status to 'Open'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('ReportAuthorities', 'status');
  }
};
