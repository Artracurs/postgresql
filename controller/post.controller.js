const db = require('../db')

class PostController {
  async createPost(req, res) {
    const { title, content, user_id } = req.body;
    const newPost = await db.query('INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *', [title, content, user_id]);
    // console.log(req.body);
    res.json(newPost.rows[0]);
  }

  async getPosts(req, res) {
    const posts = await db.query('SELECT * FROM post');
    res.json(posts.rows);
  }

  async getPostsByUser(req, res) {
    const id = req.query.id;
    console.log(id);
    const posts = await db.query('select * from post where user_id = $1', [id])
    console.log('getPostsByUser');
    res.json(posts.rows);
  }
}

module.exports = new PostController()