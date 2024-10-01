import { DataTypes, Model } from "sequelize";

export class Issue extends Model {}

export function IssueTable(sequelize) {
  Issue.init(
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
      },
    },
    {
      tableName: "issues",
      sequelize,
    },
  );
  return Issue;
}
