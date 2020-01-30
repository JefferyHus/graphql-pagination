const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/typedefs');
const resolvers = require('./graphql/resolvers');

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});