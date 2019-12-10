//a migration file describes the changes to apply to the db
//the up function describes what will be done
//the down function describes how to revert the changes

exports.up = function(knex) {
    // ALWAYS RETURN THE CALL TO KNEX.SCHEMA
    return knex.schema.createTable('veggies', tbl => {
        // primary key, called 'id', which is usually an integer that auto-increments -- to write it so it does this right out hte box, do the following:
        tbl.increments('id');
        // .unique() is a constraint -- rules we define to protect against invalid data
        // .notNullable() -- another constraint that requires we add some text in this field or it gives an error
        tbl.string('name', 255)
        .unique()
        .notNullable()
        .index(); // .index() makes searching for vegetables using this column faster -- you can add it for one column, two columns (if you need to have two things linked -- like name and phone number or name, email, for example)
        tbl.boolean('like_it').defaultTo(false) // true is 1, false is 0?, can put a 1/0 or a true/false without quotes
    });
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('veggies');
};
