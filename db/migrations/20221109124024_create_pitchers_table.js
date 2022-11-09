/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("pitchers", function (table) {
        table.increments("id").primary();
        table.string("first_name", 32);
        table.string("last_name", 32).notNullable();
        table.string("W-L", 32);
        table.decimal("ERA", null);
        table.integer("K");
        table.decimal("WHIP", null);
        table.string("image", 255);  
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    knex.scheme.dropTable("pitchers")
};
