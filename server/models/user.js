"use strict";
import { Model, DataTypes } from "sequelize";

const User = (sequelize) => {
  class User extends Model {
    static associate(models) {
      // Define association with Feed model
      User.hasMany(models.Feed, { foreignKey: "userId" });
    }
  }

  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: true, // Allow null if necessary
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true, // Validate email format
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [6, 100], // Minimum length for password
            msg: "Password must be between 6 and 100 characters long",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      timestamps: true, // Enable timestamps
    },
  );

  return User;
};

export default User; 
