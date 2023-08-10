const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const PORT = process.env.PORT || 3001;
const app = express();
require('dotenv').config();
const cors = require('cors');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(cors({
  origin: ['http://localhost:3000', 'https://studio.apollographql.com']
}));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

async function startServer() {

  await server.start();

  server.applyMiddleware({ app });

  db.once('open', async () => {
    await app.listen({ port: PORT });
    console.log(`:rocket: Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();