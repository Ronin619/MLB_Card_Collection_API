const knex = require("knex");
const knexfile = require("./knexfile");
require('dotenv').config({path: "../.env.local"}); // sets environment variables 

const db = knex(knexfile.development);

module.exports = db