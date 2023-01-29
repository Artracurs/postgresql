const db = require('../db')

class PostController {
  async cretePost(req, res) {
    const { title, content } = req.body;
    const newPost = await db.query('INSERT INTO post (title, content) values ($1, $2) RETURNING *', [title, content]);
    res.json(newPost.rows[0]);
  }

  async getPosts(req, res) {
    const posts = await db.query('SELECT * FROM post');
    res.json(posts.rows);
  }

  async deletePost(req, res) {
    try {
      const id = req.params.id;
      await db.query('DELETE FROM post where id = $1', [id])
      console.log(id);
      const users = await db.query('SELECT * FROM post');
      res.json(users.rows)
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new PostController()