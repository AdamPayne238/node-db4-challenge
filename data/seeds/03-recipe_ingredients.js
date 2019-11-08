
exports.seed = function(knex) {

      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 10}, //mac
        {recipe_id: 1, ingredient_id: 2, quantity: 20}, //mac
        {recipe_id: 1, ingredient_id: 3, quantity: 30}, //mac
        {recipe_id: 1, ingredient_id: 4, quantity: 15}, //mac
        {recipe_id: 2, ingredient_id: 8, quantity: 22}, //pop
        {recipe_id: 3, ingredient_id: 5, quantity: 12}, //pb
        {recipe_id: 3, ingredient_id: 6, quantity: 54}, //pb
        {recipe_id: 3, ingredient_id: 7, quantity: 3},  //pb
      ]);
};
