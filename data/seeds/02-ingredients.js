
exports.seed = function(knex) {

      return knex('ingredients').insert([
        {name: 'cheese', quantity: 20, measurement: 'pounds'}, 
        {name: 'water', quantity: 0.5, measurement: 'gallons'},
        {name: 'noodles', quantity: 1, measurement: 'box'},
        {name: 'butter', quantity: 2, measurement: 'tbl spoons'},
        {name: 'peanut butter', quantity: 2, measurement: 'tbl spoons'},
        {name: 'jelly', quantity: 1, measurement: 'tbl spoons'},
        {name: 'toast', quantity: 2, measurement: 'slices'},
        {name: 'popcorn', quantity: 1, measurement: 'bag'},
      ]);
};
