require('dotenv').config(); 
const knex = require("knex");
const knexfile = require("./knexfile");

// const db = knex(knexfile.development);
const environment = process.env.DATABASE_URL ? "production" : "development";

module.exports = knex(knexfile[environment]);
// const knex = require("knex");
// const knexconfig = require("./knexfile");
// require('dotenv').config(); // sets environment variables 

// //{path: "../.env.local"}

// const environment = process.env.DATABASE_URL ? "production" : "development";

// module.exports = knex(knexConfig[environment]);