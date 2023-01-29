const db = require('../db')

class PostController {
  async cretePost(req, res) {
    const { title, content } = req.body;
    const newPost = await db.query('INSERT INTO post (title, content) values ($1, $2) RETURNING *', [title, content])
    res.json(newPost.rows[0])
  }

  async getPosts(req, res) {

  }
}

module.exports = new PostController()