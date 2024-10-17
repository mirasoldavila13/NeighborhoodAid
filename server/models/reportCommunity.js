import { DataTypes } from 'sequelize';
import sequelize from "../config/connection.js"; 

const ReportCommunity = sequelize.define('CommunityReports', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  location: {
    type: DataTypes.JSONB, 
    allowNull: false,
    defaultValue: { lat: 0, lon: 0 },
  },
  contacted: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('reported', 'in progress', 'resolved'),
    defaultValue: 'reported',
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  userId: { // Add this field
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', // Adjust if your users table has a different name
      key: 'id'
    }
  }
}, {
  timestamps: true, 
});

export default ReportCommunity;
