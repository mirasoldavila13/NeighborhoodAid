"use strict";

import bcrypt from "bcrypt";
import db from "../server/models/index.js"; // Adjust the path if necessary

const seedUsers = async () => {
  const sampleUsers = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      password: await bcrypt.hash("password123", 10),
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      password: await bcrypt.hash("password456", 10),
    },
    {
      name: "Alice Johnson",
      email: "alicejohnson@example.com",
      password: await bcrypt.hash("password789", 10),
    },
    {
      name: "Bob Brown",
      email: "bobbrown@example.com",
      password: await bcrypt.hash("password101", 10),
    },
    // Add more users as needed
  ];

  await db.User.bulkCreate(sampleUsers, { individualHooks: true });
};

const up = async (queryInterface) => {
  await seedUsers();
};

const down = async (queryInterface) => {
  await queryInterface.bulkDelete('Users', null, {});
};

export default { up, down };
