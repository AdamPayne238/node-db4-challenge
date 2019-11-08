
exports.seed = function(knex) {

      return knex('ingredients').insert([
        {name: 'cheese'}, 
        {name: 'water'},
        {name: 'noodles'},
        {name: 'butter'},
        {name: 'peanut butter'},
        {name: 'jelly'},
        {name: 'toast'},
        {name: 'popcorn'},
      ]);
};
