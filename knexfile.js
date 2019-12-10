// Update with your config settings.

//this file contains instructions knex needs to connect to the db

//each key on the exported object has the configuration for a db environment, (dev, production, testing, etc)

// the knex CLI will use the configuration on this file to find the db

//the knex CLI will use the "development" environment by default but we can override that behavior.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault:true, //only needed when using sqlite3
    connection: {
      filename: './data/produce.db3' //where is the database file? this tells you
    },
    migrations: {
      directory: './data/migrations' //will be created automatically, unless you write this, then it tells it what to look at/teaches it how to connect
    },
    seeds: {
      directory: './data/seeds'
    }

  },
};
  //removed these things that came after development because we really don't need them -- can always do a knex init somewhere and grab this stuff if needed

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }


