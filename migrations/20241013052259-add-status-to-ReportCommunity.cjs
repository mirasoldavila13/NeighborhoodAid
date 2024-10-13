'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('CommunityReports', 'status', {
      type: Sequelize.ENUM('reported', 'in progress', 'resolved'),
      defaultValue: 'reported',
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('CommunityReports', 'status');
  }
};