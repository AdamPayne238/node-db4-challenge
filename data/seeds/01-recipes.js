
exports.seed = function(knex) {

      return knex('recipes').insert([
        {name: 'Mac & Cheese', instructions: 'Boil water, add noodles, strain noodles add cheese and butter'}, //1
        {name: 'Popcorn', instructions: 'Place bag of popcorn in microwave, microwave on high for 6 hours'}, //2
        {name: 'PB&J', instructions: 'smash peanut butter and jelly between two pieces of bread'}, //3
      ]);
};
