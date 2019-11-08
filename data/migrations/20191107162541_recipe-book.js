
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
        tbl.increments();

        tbl.string('name', 64).notNullable();
        tbl.string('instructions', 255).notNullable();
  })
    .createTable('ingredients', tbl => {
        tbl.increments();

        tbl.string('name', 64).notNullable();
    })
    .createTable('recipe_ingredients', tbl => {
        tbl.increments();

        //define foreign keys
        tbl
        .integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
        tbl
        .integer('ingredient_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
        tbl.float('quantity').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema
    //drop tables in reverse order when using foreign keys
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};
