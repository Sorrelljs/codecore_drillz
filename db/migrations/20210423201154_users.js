
exports.up = function(knex) {
return knex.schema.createTable('users', (table) => {
  table.increments('id')
  table.string('email').notNullable().unique();
  table.string('password', 128).notNullable();
  table.string("resetLink", 255)
  table.string('first_name').notNullable();
  table.string('last_name').notNullable();
  table.timestamps(true, true)
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
