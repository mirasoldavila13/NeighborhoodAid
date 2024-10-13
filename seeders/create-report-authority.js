'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Insert 20 report authorities
    await queryInterface.bulkInsert('ReportAuthorities', [
      {
        title: 'Street Light Outage',
        description: 'The street light is not functioning.',
        lat: 34.0522,
        lon: -118.2437,
        weather: null, // Adjust this as needed
        address: '123 Main St',
        city: 'Los Angeles',
        email: 'user@example.com',
        phone: '555-1234',
        contacted: false,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Pothole on Avenue 5',
        description: 'There is a large pothole that needs immediate attention.',
        lat: 34.0525,
        lon: -118.2430,
        weather: null,
        address: '456 Avenue 5',
        city: 'Los Angeles',
        email: 'user@example.com',
        phone: '555-5678',
        contacted: false,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Missing Stop Sign',
        description: 'The stop sign at the intersection is missing.',
        lat: 34.0528,
        lon: -118.2420,
        weather: null,
        address: '789 Intersection Ave',
        city: 'Los Angeles',
        email: 'user@example.com',
        phone: '555-8765',
        contacted: false,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add 17 more records...
      // Make sure to change the latitude, longitude, titles, descriptions, etc.
      {
        title: 'Graffiti on Wall',
        description: 'There is graffiti on the wall near the park.',
        lat: 34.0512,
        lon: -118.2400,
        weather: null,
        address: '101 Park St',
        city: 'Los Angeles',
        email: 'user@example.com',
        phone: '555-4321',
        contacted: false,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ReportAuthorities', null, {});
  }
};
