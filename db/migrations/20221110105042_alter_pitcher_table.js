/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.table("pitchers", table => {
    table.string("W-L").alter()
    table.renameColumn("W-L", "W_L")
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  table.dropColumn("W-L")
};
