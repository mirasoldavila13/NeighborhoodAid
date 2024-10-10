"use strict";

import db from "../server/models/index.js"; // Adjust the path if necessary

const seedComments = async () => {
  const sampleComments = [
    {
      content: "This is a comment for feed 1",
      userId: 1, // Assuming a user with ID 1 exists
      feedId: 1, // Assuming a feed with ID 1 exists
    },
    {
      content: "This is a comment for feed 2",
      userId: 2, // Assuming a user with ID 2 exists
      feedId: 2, // Assuming a feed with ID 2 exists
    },
    // Add more comments
  ];

  await db.Comment.bulkCreate(sampleComments);
};

const up = async (queryInterface) => {
  await seedComments();
};

const down = async (queryInterface) => {
  await queryInterface.bulkDelete('Comments', null, {});
};

export default { up, down };
