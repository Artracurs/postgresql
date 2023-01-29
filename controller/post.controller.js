const db = require('../db')

class PostController {
  async cretePost(req, res) {
    const { title, content } = req.body;
    const newPost = await db.query('INSERT INTO post (title, content) values ($1, $2) RETURNING *', [title, content])
    res.json(newPost.rows[0])
  }

  async getPosts(req, res) {
    const posts = await db.query('SELECT * FROM post');
    // res.json(posts.rows.sort((a, b) => a.id - b.id))
    res.json(posts.rows)
  }
}

module.exports = new PostController()