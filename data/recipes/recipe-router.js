const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();


//WORKING
// - `getRecipes()`: should return a list of all recipes in the database.
router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipe => {
      res.json(recipe);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
  });


// - `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
router.get('/:id/ingredients', (req, res) => {
    const { id } = req.params;

    Recipes.getShoppingList(id)
    .then(ingredients => {
        res.status(200).json(ingredients)
    })
    .catch(err => {
        res.status(500).json({ err: "failed to get ingredients"})
    })
});

// - `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe
router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;

    Recipes.getInstructions(id)
    .then(instructions => {
      res.status(200).json(instructions)
    })
    .catch(err => {
      res.status(500).json({ err: "failed to get instructions"})
    })
});


module.exports = router;