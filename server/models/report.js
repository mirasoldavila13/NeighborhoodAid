import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js'; 

class Report extends Model {
  static associate(models) {
    Report.belongsTo(models.User, { foreignKey: 'userId' });
  }
}

Report.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    location: {
      type: DataTypes.ARRAY(DataTypes.FLOAT), // [lat, lng]
      allowNull: false,
    },
    weatherData: {
      type: DataTypes.JSON, // Store weather data as JSON
      allowNull: false,
    },
    contacted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Report',
  }
);

export default Report;
