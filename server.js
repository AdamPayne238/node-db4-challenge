const express = require('express');

const server = express();

server.use(express.json());

const RecipeRouter = require('./data/recipes/recipe-router.js');

server.use('/api/recipes', RecipeRouter);


module.exports = server;