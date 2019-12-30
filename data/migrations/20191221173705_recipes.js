  
exports.up = function(knex) {
    return knex.schema.createTable("posts", posts => {
      posts.increments();
      posts.string("chef_name", 255);
      posts.string("recipe_title", 255);
      posts.string("recipe_photo", 255);
      posts.string("recipe_ingredients", 255);
      posts
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("newUsers")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("posts");
  }; 