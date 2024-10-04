// import { DataTypes } from "sequelize";
// import sequelize from "../config/connection.js";

// // Define the Issue model
// const Issue = sequelize.define(
//   "Issue",
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//     location: {
//       type: DataTypes.GEOMETRY("POINT"), // Stores coordinates
//       allowNull: false,
//     },
//     contacted: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//     },
//     status: {
//       type: DataTypes.ENUM("reported", "in progress", "resolved"),
//       allowNull: false,
//     },
//     picture: {
//       type: DataTypes.STRING, // Store file path
//       allowNull: true,
//     },
//     assignedUserId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: "Users",
//         key: "id",
//       },
//     },
//   },
//   {
//     timestamps: true,
//   },
// );

// export default Issue;