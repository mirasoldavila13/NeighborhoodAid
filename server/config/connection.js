<<<<<<< HEAD
import { Sequelize } from "sequelize";
=======
import Sequelize from "sequelize";
>>>>>>> bffe57124899fd019c4643ffd16bd66943be576d
import "dotenv/config";

const sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize(process.env.DATABASE_URL)
    : new Sequelize(
<<<<<<< HEAD
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASS,
      {
        host: "localhost",
        dialect: "postgres",
      },
    );
=======
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASS,
        {
          host: "localhost",
          dialect: "postgres",
        },
      );
>>>>>>> bffe57124899fd019c4643ffd16bd66943be576d

export default sequelize;