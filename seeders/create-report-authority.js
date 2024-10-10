"use strict";

import db from "../server/models/index.js"; // Adjust the path if necessary

const seedReportAuthorities = async () => {
  const sampleReports = [
    {
      title: "Water Leak",
      description: "There is a significant water leak on Main Street.",
      lat: 34.0522, // Example latitude
      lon: -118.2437, // Example longitude
      address: "123 Main St, Los Angeles, CA",
      city: "Los Angeles",
      email: "contact@city.com",
      phone: "123-456-7890",
      contacted: false,
      userId: 1, // Assuming a user with ID 1 exists
    },
    {
      title: "Streetlight Out",
      description: "The streetlight at 5th and Elm is not working.",
      lat: 34.0522,
      lon: -118.2437,
      address: "5th and Elm, Los Angeles, CA",
      city: "Los Angeles",
      email: "contact@city.com",
      phone: "123-456-7890",
      contacted: false,
      userId: 2, // Assuming a user with ID 2 exists
    },
    // Add more report samples as needed
  ];

  await db.ReportAuthorities.bulkCreate(sampleReports);
};

const up = async (queryInterface) => {
  await seedReportAuthorities();
};

const down = async (queryInterface) => {
  await queryInterface.bulkDelete('ReportAuthorities', null, {});
};

export default { up, down };
