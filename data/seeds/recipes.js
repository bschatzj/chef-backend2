
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          chef_name: "Brendan :D",
          recipe_title: "Cereal a la Milk",
          item_ingredients: "Cereal of Choice, Milk",
          user_id: 0
        }
      ]);
    });
};
