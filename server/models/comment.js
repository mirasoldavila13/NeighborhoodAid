import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class Comment extends Model {
  static associate(models) {
    Comment.belongsTo(models.User, { foreignKey: 'userId' }); // Association with User
    Comment.belongsTo(models.Feed, { foreignKey: 'feedId' }); // Association with Feed
  }
}

Comment.init(
  {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    feedId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Comment',
    timestamps: true, 
  }
);

export default Comment;
