import { UserTable } from "./user.js";
import { IssueTable } from "./issue.js";
import Sequelize from "sequelize";
import "dotenv/config";

const sequelizeServer =
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

const User = UserTable(sequelizeServer);
const Issue = IssueTable(sequelizeServer);

User.hasMany(Issue, { foreignKey: "assignedUserId" });
Issue.belongsTo(User, { foreignKey: "assignedUserId", as: "assignedUser" });
export { sequelizeServer, User, Issue };