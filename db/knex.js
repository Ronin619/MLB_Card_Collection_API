const knex = require("knex");
const knexConfig = require("./knexfile");
require('dotenv').config(); // sets environment variables 

const environment = process.env.DATABASE_URL ? "production" : "development";

module.exports = knex(knexConfig[environment]);
