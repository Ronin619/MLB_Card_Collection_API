require('dotenv').config(); 
const knex = require("knex");
const knexfile = require("./knexfile");

const environment = process.env.DATABASE_URL ? "production" : "development";

module.exports = knex(knexfile[environment]);

// //{path: "../.env.local"}

