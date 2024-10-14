import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js"; // Assuming your connection.js exports the Sequelize instance

// Define the ReportAuthority model by extending Model
class ReportAuthority extends Model {}

// Initialize the model with attributes
ReportAuthority.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lat: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    lon: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    weather: {
      type: DataTypes.JSONB, 
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contacted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING, 
      allowNull: false,
      defaultValue: "Open",
    },
  },
  {
    sequelize,
    modelName: "ReportAuthority",
    timestamps: true,
  },
);

export default ReportAuthority;
