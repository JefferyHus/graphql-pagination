const { Users, Posts, Op } = require('../../models');
const { GraphQLID, GraphQLList, GraphQLString } = require('graphql');
const { userType } = require('../typedefs');

module.exports = {
  async user(parent, { id }) {
    return await Users.findByPk(id);
  },
  async posts(parent, { limit, publisherId, cursor }) {
    return await Posts.findAll({
      where: {
        publisherId,
        createdAt: {
          [Op.gt]: cursor
        }
      },
      limit
    });
  }
}