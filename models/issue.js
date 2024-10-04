"use strict";
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

class Issue extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // Define associations here, e.g., this.belongsTo(models.User, { foreignKey: 'assignedUserId' });
  }
}

// Initialize the Issue model
Issue.init(
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
    },
    location: {
      type: DataTypes.GEOMETRY("POINT"), // Stores coordinates
      allowNull: false,
    },
    contacted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("reported", "in progress", "resolved"),
      allowNull: false,
    },
    // picture: {
    //   type: DataTypes.STRING, // Store file path
    //   allowNull: true,
    // },
    assignedUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users", // Ensure the model name matches the table name
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Issue",
    timestamps: true,
  }
);

export default Issue;