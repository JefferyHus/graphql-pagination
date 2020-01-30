'use strict';

const { Users, Op } = require('../models');
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let users = await Users.findAll();
    let userPosts = [];

    for(let i = 0;i < 100; i++) {
      let randomUser = users[Math.floor(Math.random() * users.length)];

      userPosts.push({
        title: faker.fake("{{lorem.sentence}}"),
        content: faker.fake("{{lorem.paragraph}}"),
        publisherId: randomUser.id,
        createdAt: Math.floor(Date.now()/1000),
        updatedAt: Math.floor(Date.now()/1000)
      });
    }

    return queryInterface.bulkInsert('Posts', userPosts);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
