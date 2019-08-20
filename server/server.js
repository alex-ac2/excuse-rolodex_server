const express = require('express');
const app = express();
require('dotenv').config();

// Postgres connection
const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

// graphQL
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./src/typeDefs');
const resolvers = require('./src/resolvers');

const server = new ApolloServer({
  // These will be defined for both new or existing servers
  typeDefs,
  resolvers,
});


server.applyMiddleware({ app }); // app is from an existing express app
app.use(express.static('public'));

app.listen(process.env.PORT || 5000, () => console.log('Excuse-Rolodex server is running'))