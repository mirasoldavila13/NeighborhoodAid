import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

//Define the Issue model
const Issue = sequelize.define(
  "Issue",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    location: {
      type: DataTypes.GEOMETRY("POINT"), // Stores coordinates
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("reported", "in progress", "resolved"),
      allowNull: false,
    },
    assignedUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users", // Refers to the Users table
        key: "id",
      },
    },
  },
  {
    timestamps: true,
  },
);

export default Issue;
