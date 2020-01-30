const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID
    firstName: String
    lastName: String
    createdAt: String
  }

  type Post {
    id: ID
    title: String
    content: String
    publisherId: ID
    createdAt: String
  }

  type Query {
    user: User
    posts: [Post]
  }
`;

module.exports = typeDefs;