const express = require("express");
const postsController = require('../controllers/posts.controller');
const router = express.Router();

const posts = [
    { id: 11, title: "Post 1", content: "this is the first post" },
    { id: 22, title: "Post 2", content: "this is the second post" }
];

router.post("/", (req, res) => {
    postsController.createPost(req.body);
    res.status(201).send("Successfully created post");
});

router.get("/:id", (req, res) => {
    console.log(req.query.id);
	const reqPostId = req.query.id;
	let found = false;
	for (let post of posts) {
		if (post.id == reqPostId) {
			res.send(post);
			return;
		}
	}
	if (!found) {
		res.status(404).send("Post not found");
	}
});

router.delete("/:id", (req, res) => {
    const reqPostId = req.params.id;
    postsController.deletePost(reqPostId);
    res.status(200).send("Post deleted successfully");
});

module.exports = router;
