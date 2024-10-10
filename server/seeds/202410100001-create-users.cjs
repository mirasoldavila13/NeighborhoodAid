import User from "../models/user.js";
import bcrypt from "bcrypt";

export const seedUsers = async () => {
  const hashedUsers = [
    {
      name: "John Doe",
      email: "JohnDoe1@gmail.com",
      password: await bcrypt.hash("password1", 10),
    },
    {
      name: "Jane Smith",
      email: "JaneSmith2@gmail.com",
      password: await bcrypt.hash("password2", 10),
    },
    {
      name: "Alice Johnson",
      email: "AliceJohnson3@gmail.com",
      password: await bcrypt.hash("password3", 10),
    },
    {
      name: "Bob Brown",
      email: "BobBrown4@gmail.com",
      password: await bcrypt.hash("password4", 10),
    },
    {
      name: "Charlie Davis",
      email: "CharlieDavis5@gmail.com",
      password: await bcrypt.hash("password5", 10),
    },
    {
      name: "Emily Clark",
      email: "EmilyClark6@gmail.com",
      password: await bcrypt.hash("password6", 10),
    },
    {
      name: "David Wilson",
      email: "DavidWilson7@gmail.com",
      password: await bcrypt.hash("password7", 10),
    },
    {
      name: "Sophia Martinez",
      email: "SophiaMartinez8@gmail.com",
      password: await bcrypt.hash("password8", 10),
    },
    {
      name: "James Taylor",
      email: "JamesTaylor9@gmail.com",
      password: await bcrypt.hash("password9", 10),
    },
    {
      name: "Mia Anderson",
      email: "MiaAnderson10@gmail.com",
      password: await bcrypt.hash("password10", 10),
    },
    {
      name: "Michael Thomas",
      email: "MichaelThomas11@gmail.com",
      password: await bcrypt.hash("password11", 10),
    },
    {
      name: "Isabella Jackson",
      email: "IsabellaJackson12@gmail.com",
      password: await bcrypt.hash("password12", 10),
    },
    {
      name: "Ethan White",
      email: "EthanWhite13@gmail.com",
      password: await bcrypt.hash("password13", 10),
    },
    {
      name: "Ava Harris",
      email: "AvaHarris14@gmail.com",
      password: await bcrypt.hash("password14", 10),
    },
    {
      name: "William Martin",
      email: "WilliamMartin15@gmail.com",
      password: await bcrypt.hash("password15", 10),
    },
    {
      name: "Ella Thompson",
      email: "EllaThompson16@gmail.com",
      password: await bcrypt.hash("password16", 10),
    },
    {
      name: "Alexander Garcia",
      email: "AlexanderGarcia17@gmail.com",
      password: await bcrypt.hash("password17", 10),
    },
    {
      name: "Grace Martinez",
      email: "GraceMartinez18@gmail.com",
      password: await bcrypt.hash("password18", 10),
    },
    {
      name: "Daniel Robinson",
      email: "DanielRobinson19@gmail.com",
      password: await bcrypt.hash("password19", 10),
    },
    {
      name: "Chloe Lee",
      email: "ChloeLee20@gmail.com",
      password: await bcrypt.hash("password20", 10),
    },
  ];

  await User.bulkCreate(hashedUsers, { individualHooks: true });
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete('Users', null, {});
};
