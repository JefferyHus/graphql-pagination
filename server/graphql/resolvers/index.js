const { Users, Posts, Op } = require('../../models');

module.exports = {
  Query: {
    user: async (parent, { id }) => {
      return await Users.findByPk(id);
    },
    posts: async (parent, { limit, publisherId, cursor }) => {
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
}