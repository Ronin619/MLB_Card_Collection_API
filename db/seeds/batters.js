/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('batters').del()
  await knex('batters').insert([
    {id: 1, first_name: 'Aaron', last_name: "Judge", AVG: .331, HR: 62, RBI: 131, OPS: 1.111, image: "insert image"},
    {id: 2, first_name: 'Albert', last_name: "Pujols", AVG: .270, HR: 24, RBI: 68, OPS: .895, image: "insert image"},
    {id: 3, first_name: 'Jose', last_name: "Altuve", AVG: .300, HR: 28, RBI: 57, OPS: .921, image: "insert image"},
    {id: 4, first_name: 'Shohei', last_name: "Ohtani", AVG: .273, HR: 34, RBI: 95, OPS: .356, image: "insert image"}
  ]);
};
