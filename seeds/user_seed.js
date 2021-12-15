
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'javy1',pwd: '123123', real_name: 'javy'},
        { name: 'javy2',pwd: '123123', real_name: 'javy'},
        { name: 'javy3',pwd: '123123', real_name: 'javy'}
      ]);
    });
};
