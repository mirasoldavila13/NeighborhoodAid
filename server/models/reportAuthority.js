import { DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';  // Assuming your connection.js exports the Sequelize instance

// Define the ReportAuthority model
const ReportAuthority = sequelize.define('ReportAuthority', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  lat: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  lon: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  weather: {
    type: DataTypes.JSONB,  // Store weather data as JSON object
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,  // Full address
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true,  // City name
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contacted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,  // Assuming userId references the user who submitted the report
  }
}, {
  timestamps: true,
});

export default ReportAuthority;