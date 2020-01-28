const { Users, Op } = require('../../models');
const { GraphQLID, GraphQLList, GraphQLString } = require('graphql');
const { userType } = require('../typedefs');

module.exports = {
  user: {
    type: userType,
    args: {
      id: { type: GraphQLID }
    },
    async resolve(parent, { id }) {
      await Users.findByPk(id);
    }
  },
  users: {
    type: new GraphQLList(userType),
    args: {
      cursor: { type: GraphQLString }
    },
    async resolve(parent, { cursor }) {
      await Users.findAll({
        where: {
          [Op.gt]: cursor
        }
      });
    }
  }
}