const db = require('../db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
};

// - `getRecipes()`: should return a list of all recipes in the database.
function getRecipes(){
    return db.select('*')
    .from('recipes');
}

// - `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
function getShoppingList(recipe_id){

}

// - `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe
function getInstructions(recipe_id){

}