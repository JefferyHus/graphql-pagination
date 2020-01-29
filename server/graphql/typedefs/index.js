const { gql } = require('apollo-server');

const userType = gql`
  type User {
    id: ID,
    firstName: String,
    lastName: String,
    createdAt: String
  }

  type Query {
    user(!id): User
  }
`;

const postType = gql`
  type Post {
    id: ID,
    title: String,
    content: String,
    publisherId: ID,
    createdAt: String
  }

  type Query {
    posts(!limit, !publisherId, !cursor): [Post]
  }
`;

module.exports = {
  userType,
  postType
}