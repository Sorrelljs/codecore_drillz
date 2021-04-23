// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
     database: 'express_blog'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations',
    }
  },
};


