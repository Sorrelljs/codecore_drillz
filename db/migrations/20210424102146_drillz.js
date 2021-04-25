
exports.up = function(knex) {
    return knex.schema.createTable('drillz', table => {
        table.bigIncrements('id')
        table.text('description')
        table.text('answer')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('drillz') 
};
