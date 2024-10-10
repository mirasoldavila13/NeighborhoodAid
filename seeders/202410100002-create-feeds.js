"use strict";

import db from "../server/models/index.js"; // Adjust the path if necessary

const seedFeeds = async () => {
  const sampleFeeds = [
    {
      content: "Feed content 1",
      userId: 1, // Assuming a user with ID 1 exists
    },
    {
      content: "Feed content 2",
      userId: 2, // Assuming a user with ID 2 exists
    },
    // Add more feed samples
  ];

  await db.Feed.bulkCreate(sampleFeeds);
};

const up = async (queryInterface) => {
  await seedFeeds();
};

const down = async (queryInterface) => {
  await queryInterface.bulkDelete('Feeds', null, {});
};

export default { up, down };
