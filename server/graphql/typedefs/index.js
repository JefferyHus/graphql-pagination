const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID
    firstName: String
    lastName: String
    posts: [Post]
  }

  type Post {
    id: ID
    title: String
    content: String
    publisherId: ID
    author: User
  }

  type Query {
    user(id: ID!): User
    postsOffset(limit: Int!, offset: Int!): [Post]
    postsCursor(limit: Int!, publisherId: Int!, cursor: Int!): [Post]
  }
`;

module.exports = typeDefs;