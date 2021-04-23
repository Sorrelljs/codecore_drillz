
exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.bigIncrements('id');
        table.string('first_name');
        table.string('last_name');
        table.string('email');
        table.string('password');
        table.timestamp("created_at").defaultTo(knex.fn.now());
      })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
  
};
