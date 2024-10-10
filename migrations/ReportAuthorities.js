'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'ReportAuthorities') THEN
          CREATE TABLE "ReportAuthorities" (
            "id" SERIAL PRIMARY KEY,
            "title" VARCHAR(255) NOT NULL,
            "description" TEXT,
            "lat" DOUBLE PRECISION,
            "lon" DOUBLE PRECISION,
            "weather" JSONB,
            "address" VARCHAR(255),
            "city" VARCHAR(255),
            "email" VARCHAR(255),
            "phone" VARCHAR(255),
            "contacted" BOOLEAN,
            "userId" INTEGER,
            "createdAt" TIMESTAMPTZ DEFAULT NOW(),
            "updatedAt" TIMESTAMPTZ DEFAULT NOW()
          );
        END IF;
      END
      $$;
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("ReportAuthorities");
  }
};
