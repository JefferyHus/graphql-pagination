const { Users, Posts, Op } = require('../../models');

module.exports = {
  Query: {
    user: async (parent, { id }) => {
      return await Users.findByPk(id);
    },
    postsOffset: async (parent, { limit, offset }) => {
      return await Posts.findAll({
        offset,
        limit
      });
    },
    postsCursor: async (parent, { limit, publisherId, cursor }) => {
      return await Posts.findAll({
        where: {
          publisherId,
          id: {
            [Op.gt]: cursor
          }
        },
        limit
      });
    }
  },
  User: {
    posts: async (parent) => {
      return await Posts.findAll({
        where: {
          publisherId: parent.id
        }
      })
    }
  },
  Post: {
    author: async (parent) => {
      return await Users.findByPk(parent.publisherId)
    }
  }
}