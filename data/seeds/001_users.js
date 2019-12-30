
const bcrypt = require("bcryptjs");


exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('newUsers').del()
    .then(function () {
      // Inserts seed entries
      return knex('newUsers').insert([
        {
          username: "Brendan",
          password: bcrypt.hashSync("123456", 10),
          email: "brendan@email.com",
          location: "Michigan",
          bio: "I can't cook",

        },
        {
          username: "admin",
          password: bcrypt.hashSync("admin", 10),
          email: "admin@email.com",
          location: "California",
          bio: "I cook food",
        }
      ]);
    });
};
