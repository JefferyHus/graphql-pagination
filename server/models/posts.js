'use strict';
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    publisherId: DataTypes.INTEGER
  }, {});
  Posts.associate = function(models) {
    Posts.belongsto(models.Users, {foreignKey: 'publisherId', as: 'posts'});
  };
  return Posts;
};