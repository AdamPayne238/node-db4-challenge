
exports.seed = function(knex) {

      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1}, //mac
        {recipe_id: 1, ingredient_id: 2}, //mac
        {recipe_id: 1, ingredient_id: 3}, //mac
        {recipe_id: 1, ingredient_id: 4}, //mac
        {recipe_id: 2, ingredient_id: 8}, //pop
        {recipe_id: 3, ingredient_id: 5}, //pb
        {recipe_id: 3, ingredient_id: 6}, //pb
        {recipe_id: 3, ingredient_id: 7}, //pb
      ]);
};
