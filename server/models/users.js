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
    // associations can be defined here
  };
  return Users;
};