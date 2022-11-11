const knex = require("knex");
const knexfile = require("./knexfile");
require('dotenv').config({path: "../.env.local"}); // sets environment variables 

const db = process.env.DATABASE_URL ? "production" : "development";

module.exports = db