import { DataTypes } from 'sequelize';
import sequelize from "../config/connection.js"; // Adjust the path to match your directory structure

const Issue = sequelize.define('Issue', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  location: {
    type: DataTypes.JSONB, // Store latitude and longitude as JSON data
    allowNull: false,
    defaultValue: { lat: 0, lon: 0 },
  },
  contacted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('reported', 'in progress', 'resolved'),
    defaultValue: 'reported',
  },
  picture: {
    type: DataTypes.STRING, // Path to uploaded picture file
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

export default Issue;
