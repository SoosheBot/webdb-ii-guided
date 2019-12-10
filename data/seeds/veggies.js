
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('veggies')
    .del() // does not reset the id
    .truncate() //empties the table and resets the primary key (id)
    .then(function () {
      // Inserts seed entries
      return knex('veggies').insert([
        {name: 'broccoli', like_it:1},
        {name:  'carrot', like_it:0},
        {name:  'cabbage'}
      ]);
    });
};
