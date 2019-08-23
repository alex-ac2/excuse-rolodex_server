const express = require('express');
const app = express();
require('dotenv').config();
const db = require('../models/index');

// Postgres connection
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   dialect: 'postgres'
// });

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


db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
