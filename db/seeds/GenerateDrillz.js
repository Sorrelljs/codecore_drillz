
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('drillz').del()
    .then(function () {
      // Inserts seed entries
      return knex('drillz').insert([
        {id: 1, description: 'Day after Sunday', answer: 'Monday'},
        {id: 2, description: '2 + 2?', answer: '4'},
        {id: 3, description: 'Say hello in Spanish', answer: 'Hola'},
      ]);
    });
};
