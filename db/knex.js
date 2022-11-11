const knex = require("knex");
const knexConfig = require("./knexfile");
require('dotenv').config(); // sets environment variables 

const environment = process.env.DATABASE_URL ? "production" : "development";

module.exports = knex(knexConfig[environment]);

// const knex = require("knex");
// const knexconfig = require("./knexfile");
// require('dotenv').config(); // sets environment variables 

// //{path: "../.env.local"}

// const environment = process.env.DATABASE_URL ? "production" : "development";

// module.exports = knex(knexConfig[environment]);