
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: "Brendan :D",
          password: "123456",
          email: "brendan@email.com"
        }
      ]);
    });
};
