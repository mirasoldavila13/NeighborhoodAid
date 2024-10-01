import { UserTable } from "./user.js";
import { IssueTable } from "./issue.js";
import Sequelize from "sequelize";
import "dotenv/config";

const sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize(process.env.DATABASE_URL)
    : new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASS,
        {
          host: "localhost",
          dialect: "postgres",
        },
      );

const User = UserTable(sequelize);
const Issue = IssueTable(sequelize);

User.hasMany(Issue, { foreignKey: "assignedUserId" });
Issue.belongsTo(User, { foreignKey: "assignedUserId", as: "assignedUser" });
export { sequelize, User, Issue };
