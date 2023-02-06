const Pool = require('pg').Pool

const pool = new Pool({
  user: "pokeradmin",
  password: "GHBDTN!@",
  host: "localhost",
  port: "5432",
  database: "pokerdb"
})

module.exports = pool