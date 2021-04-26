
exports.up = function(knex) {
    return knex.schema.createTable('drillz', table => {
        table.bigIncrements('id')
        table.text('description')
        table.text('answer')
        table
            .integer("group_id")
            .references("groups.id") // Foreign key
            .onUpdate('CASCADE') // If post.id is updated, update comment.post_id as well
            .onDelete('CASCADE')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('drillz') 
};
