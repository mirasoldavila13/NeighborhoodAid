"use strict";

import db from "../server/models/index.js"; // Adjust the path if necessary

const seedCommunityReports = async () => {
  const sampleCommunityReports = [
    {
      title: "Pothole on 3rd Avenue",
      description: "There is a large pothole on 3rd Avenue that needs immediate attention.",
      lat: 34.0522, // Example latitude
      lon: -118.2437, // Example longitude
      address: "3rd Avenue, Los Angeles, CA",
      city: "Los Angeles",
      email: "community@city.com",
      phone: "123-456-7890",
      contacted: false,
      userId: 1, // Assuming a user with ID 1 exists
    },
    {
      title: "Graffiti on Community Park",
      description: "Graffiti has appeared on the playground equipment at the community park.",
      lat: 34.0523,
      lon: -118.2438,
      address: "Community Park, Los Angeles, CA",
      city: "Los Angeles",
      email: "community@city.com",
      phone: "123-456-7890",
      contacted: false,
      userId: 2, // Assuming a user with ID 2 exists
    },
    // Add more community report samples as needed
  ];

  await db.CommunityReports.bulkCreate(sampleCommunityReports);
};

const up = async (queryInterface) => {
  await seedCommunityReports();
};

const down = async (queryInterface) => {
  await queryInterface.bulkDelete('CommunityReports', null, {});
};

export default { up, down };
