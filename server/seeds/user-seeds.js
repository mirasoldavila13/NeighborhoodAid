import User from "../models/user.js";

export const seedUsers = async () => {
  await User.bulkCreate(
    [
      {
        name: "John Doe",
        email: "JohnDoe1@gmail.com",
        password: "password",
      },
      {
        name: "Jane Smith",
        email: "JaneSmith2@gmail.com",
        password: "password",
      },
    ],
    { individualHooks: true },
  );
};
