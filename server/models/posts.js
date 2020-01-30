'use strict';
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    publisherId: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  Posts.associate = function(models) {
    Posts.belongsTo(models.Users, {foreignKey: 'publisherId', as: 'posts'});
  };
  return Posts;
};