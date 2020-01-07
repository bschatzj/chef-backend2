
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
          full_name: "Brendan Schatz",
          email: "brendan@email.com",
          location: "Michigan",
          bio: "I can't cook",

        },
        {
          username: "admin",
          password: bcrypt.hashSync("admin", 10),
          full_name: "Full Name",
          email: "admin@email.com",
          location: "California",
          bio: "I cook food",
        },
        {
          username: "admin2",
          password: bcrypt.hashSync("admin2", 10),
          full_name: "Full Name",
          email: "admin@email.com",
          location: "California",
          bio: "I cook food",
        }
      ]);
    });
};
