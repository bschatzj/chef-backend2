  
exports.up = function(knex) {
    return knex.schema.createTable("posts", posts => {
      posts.increments("id");
      posts.string("chef_name", 255);
      posts.string("recipe_name", 255);
      posts.string("recipe_photo", 255);
      posts.string("recipe_ingredients", 255);
      posts.string("ingredients", 255);
      posts.string("cook_time", 255);
      posts.string("prep_time", 255);
      posts.string("instructions"); 
      posts.string("servings", 255)
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