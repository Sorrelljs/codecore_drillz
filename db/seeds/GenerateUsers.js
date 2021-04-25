
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'Bimp', last_name: 'Nipply', email: 'bnip@gmail.com', password: '123'},
        {id: 2, first_name: 'Ched', last_name: 'Nogurt', email: 'cnog@gmail.com', password: '123'},
        {id: 3, first_name: 'Lampsel', last_name: 'Jib', email: 'ljib@gmail.com', password: '123'},
      ]);
    });
};
