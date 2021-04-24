
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('groups').insert([
      { id: 1,
        name: 'Rails Routes',
        description: 'Drills for basic routing in Rails!',
        level: 'beginner',
        points: '100'
      },
      { id: 2,
        name: 'JavaScript Objects',
        description: 'Drills for JS Objects',
        level: 'intermediate',
        points: '200'
      },
      { id: 3,
        name: 'Express',
        description: 'Drills for building sites with Express.js',
        level: 'advanced',
        points: '300'
      },
      ]);
    });
};
