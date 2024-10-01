import User from "./user.js";
import Issue from "./issue.js";

User.hasMany(Issue, { foreignKey: "assignedUserId" });
Issue.belongsTo(User, { foreignKey: "assignedUserId", as: "assignedUser" });

export { User, Issue };