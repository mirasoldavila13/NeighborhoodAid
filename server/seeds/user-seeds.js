import { User } from "../models/user.js";

export const seedUsers = async () => {
  await User.bulkCreate(
    [
      {
        username: "John Doe",
        email: "JohnDoe1@gmail.com",
        password: "password",
      },
      {
        username: "Jane Smith",
        email: "JaneSmith2@gmail.com",
        password: "password",
      },
    ],
    { individualHooks: true },
  );
};
