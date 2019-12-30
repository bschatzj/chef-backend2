
exports.seed = function(knex) {
  return knex('posts').del()
    .then(function () {
      return knex('posts').insert([
        {
          chef_name: "Brendan :D",
          recipe_title: "Cereal a la Milk",
          recipe_ingredients: "Cereal of Choice, Milk",
        }
      ]);
    });
};
