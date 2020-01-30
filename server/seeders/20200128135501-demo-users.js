'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [
     {
      firstName: faker.fake("{{name.firstName}}"),
      lastName: faker.fake("{{name.lastName}}"),
      createdAt: Math.floor(Date.now()/1000),
      updatedAt: Math.floor(Date.now()/1000)
     },
     {
      firstName: faker.fake("{{name.firstName}}"),
      lastName: faker.fake("{{name.lastName}}"),
      createdAt: Math.floor(Date.now()/1000),
      updatedAt: Math.floor(Date.now()/1000)
     }
   ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
