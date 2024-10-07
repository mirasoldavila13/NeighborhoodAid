import db from "../models/index.js"; // Import your Sequelize instance
import ReportAuthority from "../models/reportAuthority.js"; // Adjust according to your file structure

const seedReportAuthority = async () => {
  try {
    // Define some sample data
    const reports = [
      {
        title: "Illegal dumping",
        description: "Illegal dumping of waste in public area",
        location: JSON.stringify({ lat: 34.0522, lon: -118.2437 }),
        weather: JSON.stringify({
          temperature: 72,
          condition: "Clear sky",
          wind: 5,
          humidity: 40,
        }),
        address: "123 Main St, Los Angeles, CA 90012",
        city: "Los Angeles",
        email: "example1@email.com",
        phone: "555-1234",
        contacted: true,
      },
      {
        title: "Broken streetlight",
        description: "Streetlight is broken on the corner of 5th and Main.",
        location: JSON.stringify({ lat: 34.0522, lon: -118.2439 }),
        weather: JSON.stringify({
          temperature: 68,
          condition: "Cloudy",
          wind: 10,
          humidity: 50,
        }),
        address: "456 Elm St, Los Angeles, CA 90013",
        city: "Los Angeles",
        email: "example2@email.com",
        phone: "555-5678",
        contacted: false,
      },
    ];

    // Insert the data into the database
    await ReportAuthority.bulkCreate(reports);
    console.log("Seed data inserted successfully");
  } catch (error) {
    console.error("Failed to seed database:", error);
  }
};

seedReportAuthority();
