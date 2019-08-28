const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Excuse {
    id: Int!
    category: String!
    caption: String!
    userId: Int
  }
  type User {
    id: Int!
    userName: String!
    email: String!
    password: String!
  }
  type Query {
    "A simple type for getting started!"
    hello: String
    excuse(id: ID!): Excuse
    excuses: [Excuse!]!
  }
  type Mutation {
    createExcuse(
      category: String!
      caption: String!
      userId: Int
    ): Excuse!
    updateExcuse (
      id: Int!
      category: String
      caption: String
      userId: Int
    ): Excuse
    createUser(
      userName: String!
      email: String!
      password: String!
    ): User!

  }

`;

module.exports = typeDefs;
