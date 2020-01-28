'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [
     {
       firstName: faker.fake("{{name.firstName}}"),
       lastName: faker.fake("{{name.lastName}}")
     }
   ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
