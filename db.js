const Pool = require('pg').Pool

const pool = new Pool({
  user: "lanneq",
  password: "/*lanneQ!*/",
  host: "localhost",
  port: "5432",
  database: "mybase"
})

module.exports = pool