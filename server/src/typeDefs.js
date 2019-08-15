const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Excuse {
    id: Int!
    category: String!
    caption: String!
  }
  type Query {
    "A simple type for getting started!"
    hello: String
    excuse: Excuse
  }

`;

module.exports = typeDefs;
