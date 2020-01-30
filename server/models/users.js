'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {
    indexes: [
      {
        fields: ["createdAt"]
      }
    ]
  });
  Users.associate = function(models) {
    Users.hasMany(models.Posts, {as: "posts", sourceKey: "id", foreignKey: "publisherId"})
  };
  return Users;
};