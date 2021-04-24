
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
        { id: 1,
          email: 'sj@gmail.com',
          password: 'rocknroll123',
          first_name: 'john',
          last_name: 'doe'
        },
        { id: 2,
            email: 'google@gmail.com',
            password: 'rocknroll321',
            first_name: 'jim',
            last_name: 'smith'
        },
        { id: 3,
            email: 'jamie@hotmail.com',
            password: 'rock123',
            first_name: 'jamie',
            last_name: 'greenwood'
        },
        ]);
      });
  };
  