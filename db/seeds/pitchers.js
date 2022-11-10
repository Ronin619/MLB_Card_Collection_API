/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pitchers').del()
  await knex('pitchers').insert([
    {id: 1, first_name: 'Shohei', last_name: "Ohtani", W_L: "15-9", ERA: 2.33, K: 219, WHIP: 1.01, image: "insert Image" },
    {id: 2, first_name: 'Gerrit', last_name: "Cole", W_L: "13-8", ERA: 3.50, K: 257, WHIP: 1.02, image: "insert Image" },
    {id: 3, first_name: 'Nestor', last_name: "Cortes", W_L: "12-4", ERA: 2.44, K: 163, WHIP: 0.92, image: "insert Image" },
    {id: 4, first_name: 'Justin', last_name: "Verlander", W_L: "18-4", ERA: 1.75, K: 185, WHIP: 0.83, image: "insert Image" }
  ]);
};
