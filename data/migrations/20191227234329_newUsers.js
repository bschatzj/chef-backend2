
exports.up = function (knex) {
    return knex.schema.createTable("newUsers", table => {
        table.increments("id");
        table.string("username", 128)
            .notNullable()
            .unique();
        table.string("password")
            .notNullable();
        table.string("confirmPassword")
        table.string("full_name");
        table.string("email", 128);
        table.string("user_picture")
        .defaultTo("https://static9.depositphotos.com/1575949/1203/v/950/depositphotos_12034707-stock-illustration-smiley-icon.jpg");
        table.string("phone");
        table.string("Location", 128);
        table.string("Bio")
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists("newUsers");
}; 