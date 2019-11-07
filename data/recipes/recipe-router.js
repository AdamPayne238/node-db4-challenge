const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();


router.get('/', (req, res) => {
    Recipes.find()
    .then(recipe => {
      res.json(recipe);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
  });




module.exports = router;