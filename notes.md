# Table schema design

Migrations is like Git for Db schemas

Migrations keep your db design in sync with the application code
>every change to the db schema must be recorded in a migration file

## Migrations -- how to
 Install the knex CLI -- `npm i -g knex` or `yarn global add knex`

 Create a knex configuration file (knexfile,js) by typing `knex init`

 Update with everything you added in the knexfile notes to 'teach' knex how to connect to the db

 Finally, to create a migration, type: `knex migrate:make and then your migrationName -- in this example we used 'addVeggieTable,' b/c we want to add a Veggies table to the produce.db3`

 To run a migration type: `knex migrate:latest` //updates database to latest version

 //sidenote -- you need to disconnect from a db in sqlite to make changes in the terminal, or you will get hella errors

 To create a seed `knex make:seed NAMEOFSEED -- we used 'veggies' in this example'`

 To run the seed `knex seed:run`