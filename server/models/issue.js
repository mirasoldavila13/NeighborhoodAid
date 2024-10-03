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
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    location: {
      type: DataTypes.JSONB, // Store lat/lng as JSON object
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("reported", "in progress", "resolved"),
      allowNull: false,
      defaultValue: "reported",
    },
    assignedUserId: {
      type: DataTypes.INTEGER,
      allowNull: true, // Can be null if not assigned yet
      references: {
        model: "Users", // Refers to the Users table
        key: "id",
      },
    },
    weather: {
      type: DataTypes.JSONB, // Store weather data as JSON object
      allowNull: true, // Allow null in case weather data is not fetched
    },
    contacted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

export default Issue;
