"use strict";
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Feed extends Model {
    static associate(models) {
      // define association here
      Feed.belongsTo(models.User, { foreignKey: "userId" });
    }
  }

  Feed.init(
    {
      content: {
        type: DataTypes.STRING,
        allowNull: false, // Ensure feed content is required
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false, // Foreign key to the user model
      },
    },
    {
      sequelize,
      modelName: "Feed",
    },
  );

  return Feed;
};
