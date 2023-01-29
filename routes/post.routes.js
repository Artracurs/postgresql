const Router = require('express');
const router = new Router();
const postController = require('../controller/post.controller');

router.post('/post', postController.cretePost);
router.get('/post', postController.getPosts);

module.exports = router;
