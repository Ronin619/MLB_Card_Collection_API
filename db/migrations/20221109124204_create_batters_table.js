/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("batters", function (table) {
        table.increments("id").primary();
        table.string("first_name", 32);
        table.string("last_name", 32).notNullable();
        table.string("AVG", 32);
        table.decimal("HR", null);
        table.integer("RBI");
        table.decimal("OPS", null);
        table.string("image", 255);  
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    knex.scheme.dropTable("batters")
};
