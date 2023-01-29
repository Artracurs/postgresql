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
    // res.json(users.rows.sort((a, b) => a.id - b.id))
    res.json(users.rows)
  }

  async getOneUser(req, res) {
    const id = req.params.id
    const user_by_id = await db.query('SELECT * FROM person where id = $1', [id]);
    console.log(user_by_id);
    res.json(user_by_id.rows[0])

  }
  async updateUser(req, res) {
    const {id, name, surname} = req.body
    const user = await db.query('UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *', [name, surname, id])
    console.log(user.rows[0]);
    res.json(user.rows[0])
  }

  async deleteUser(req, res) {
    const id = req.params.id;
    await db.query('DELETE FROM person where id = $1', [id])
    
    const users = await db.query('SELECT * FROM person');
    console.log(users.rows);
    res.json(users.rows)

  }
}

module.exports = new UserController()