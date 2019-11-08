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

//when .join
//Database Name
//Primary Key of that database
//Connect foreign key to database

// - `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
function getShoppingList(recipe_id){
    return db('recipe_ingredients as ri')
    .join('ingredients as i', 'i.id', 'ri.ingredient_id')
    .join('recipes as r', 'r.id', 'ri.recipe_id')
    .select('ri.quantity', 'i.name')
    .where('ri.recipe_id', recipe_id)
}

//when .join
//Database Name
//Primary Key of that database
//Connect foreign key to database
// - `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe
// function getInstructions(recipe_id){
//     return db('instructions')
//     .from('recipes')
//     .where('recipes.id', '=', recipe_id)
// }

function getInstructions(recipe_id){
    return db('recipes')
    .select('instructions')
    .from('recipes')
    .where('recipes.id', '=', recipe_id)
}