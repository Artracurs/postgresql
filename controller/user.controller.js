const db = require('../db')


class UserController {
  async createUSer(req, res) {
    const { name, surname } = req.body
    console.log(name, surname);
    const newPerson = await db.query('INSERT INTO person (name, surname) values ($1, $2) RETURNING *', [name, surname])
    res.json(newPerson.rows[0])
  }

  async getUsers(req, res) {
    const users = await db.query('SELECT * FROM person');
    
    res.json(users.rows);
  }

  async getOneUser(req, res) {

  }
  async updateUser(req, res) {

  }

  async deleteUser(req, res) {

  }
}

module.exports = new UserController()