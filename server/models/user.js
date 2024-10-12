"use strict";
import { Model, DataTypes } from "sequelize"; // Import Model and DataTypes from sequelize
import sequelize from "../config/connection.js";


// Define the User model as a class extending Model
class User extends Model {
  static associate(models) {
    // Define associations here
    User.hasMany(models.Feed, { foreignKey: "userId" });
    User.hasMany(models.Comment, { foreignKey: "userId" });
    User.hasMany(models.ReportAuthority, { foreignKey: "userId" });
    User.hasMany(models.ReportCommunity, { foreignKey: "userId" });
  }
}

// Initialize the User model
// Initialize the User model
User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: { // Add createdAt field
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Automatically set the current timestamp
      allowNull: false,
    },
    updatedAt: { // Add updatedAt field
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);


// Export the User model
export default User;
