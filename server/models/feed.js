import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

// Define the Feed model
const Feed = sequelize.define("Feed", {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default Feed;
