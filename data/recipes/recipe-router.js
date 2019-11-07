const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

// - `getRecipes()`: should return a list of all recipes in the database.
// - `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
// - `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipe => {
      res.json(recipe);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
  });




module.exports = router;