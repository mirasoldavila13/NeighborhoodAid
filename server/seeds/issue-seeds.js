import Issue from "../../models/issue.js";
import Sequelize from "sequelize";

export const seedIssues = async () => {
  await Issue.bulkCreate(
    [
    {
      description:
        "Lorem ipsum dolor sit amet. Vel vitae optio qui facere dolores qui dolores quia. Et nisi quam est facere animi et magni iste a amet voluptatem ut rerum animi!",
      location: Sequelize.fn(
        "ST_GeomFromText",
        "POINT(34.853241 -117.382893)",
        4326,
      ), // 4326 SRID is needed for postgres
      status: "reported",
      assignedUserId: 1,
    },
    {
      description: "This is a test description please change this later",
      location: Sequelize.fn(
        "ST_GeomFromText",
        "POINT(37.058450 -119.668049)",
        4326,
      ), // 4326 SRID is needed for postgres
      status: "in progress",
      assignedUserId: 2,
    },
  ]);
};
