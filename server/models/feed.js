import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class Feed extends Model {
  static associate(models) {
    Feed.belongsTo(models.User, { foreignKey: 'userId' }); // Association with User
    Feed.hasMany(models.Comment, { foreignKey: 'feedId', onDelete: 'CASCADE' }); // Comments on the feed
  }
}

Feed.init(
  {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Feed',
  }
);

export default Feed;
