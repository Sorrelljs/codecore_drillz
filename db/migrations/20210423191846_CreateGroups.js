
exports.up = function(knex) {
    return knex.schema.createTable('groups', table => {
        table.bigIncrements('id')
        table.string('name')
        table.text('description')
        table.string('level')
        table.integer('points')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('groups')  
};
