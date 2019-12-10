// Update with your config settings.

//this file contains instructions knex needs to connect to the db

//each key on the exported object has the configuration for a db environment, (dev, production, testing, etc)

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault:true,
    connection: {
      filename: './data/produce/db3'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
