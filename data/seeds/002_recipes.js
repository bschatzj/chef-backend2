
exports.seed = function(knex) {
  return knex('posts').del()
    .then(function () {
      return knex('posts').insert([
        {
          chef_name: "Brendan :D",
          recipe_name: "avocado",
          ingredients: "its just an avocado",
          cook_time: "2",
          prep_time: 2,
          servings: "1 I like my avocado",
          instructions: "EAT THE AVOCADO",
          user_id: 1
        }
      ]);
    });
};
