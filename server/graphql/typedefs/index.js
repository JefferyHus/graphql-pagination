const { gql } = require('apollo-server');

const userType = gql`
  type User {
    id: ID,
    firstName: String,
    lastName: String,
    createdAt: Date
  }

  type Query {
    user(!id): User,
    users: [User]
  }
`;

module.exports = {
  typedefs: [
    userType
  ]
}