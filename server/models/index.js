"use strict";
import fs from "fs";
import path from "path";
import { Sequelize } from "sequelize";
import process from "process";
import configFile from "../config/config.json";

const basename = path.basename(import.meta.url);
const env = process.env.NODE_ENV || "development";
const config = configFile[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );
}

// Read and import all model files
fs.readdirSync(new URL(".", import.meta.url).pathname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach(async (file) => {
    const model = await import(`./${file}`);
    db[model.default.name] = model.default(sequelize, Sequelize.DataTypes);
  });

// Set up associations (relationships) between models
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Explicitly import models for associations
import User from "./user.js";
import Feed from "./feed.js";
import Comment from "./comment.js"; // Import other models as needed
import Report from "./report.js";
import ReportAuthority from "./reportAuthority.js";
import ReportCommunity from "./reportCommunity.js";

// Define associations between User and other models
User.hasMany(Feed, { foreignKey: "userId" });
Feed.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Comment, { foreignKey: "userId" });
Comment.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Report, { foreignKey: "userId" });
Report.belongsTo(User, { foreignKey: "userId" });

ReportAuthority.belongsTo(User, { foreignKey: "userId" });
ReportCommunity.belongsTo(User, { foreignKey: "userId" });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
