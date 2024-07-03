const postsService = require('../services/posts.service');

const postsController = {
    getPost: async (req, res) => {
        console.log("Reached GET post controller");
        const postId = req.params.id;
        console.log(postId);
        const postObj = await postsService.getPostById(postId);
        res.status(200).send(postObj);
    },
    getPosts: async (req, res) => {
        console.log("Reached GET posts controller");
        const postObj = await postsService.getPosts();
        res.status(200).send(postObj);
    
    },
    createPost: async (req, res)  => {
        console.log("Reached post controller");
        const postToBeCreated = req.body;
        console.log(postToBeCreated);

        // validate post object from request
        if (!postToBeCreated ||
            !postToBeCreated.author ||
            !postToBeCreated.title ||
            !postToBeCreated.description) {
            res.status(400).send("Invalid post object");
            return;
        }
        postsService.createPost(postToBeCreated);
        res.status(201).send("Post created successfully");
    },
    deletePost: async (req, res) => {
        const postId = req.params.id;
        await postsService.deletePost(postId);
        console.log(`Deleted post with id: ${postId}`);
        res.status(200).send('Deleted post successfully');
    },
    updatePostLikes: async (req, res) => {
        console.log("Reached PATCH post likes controller")
        const postId = req.params.id;
        const username = req.body.username;

        if(!username) {
            res.status(400).send("Invalid username");
            return;
        }

        console.log(postId);
        console.log(username);

        const postObj = await postsService.getPostById(postId);
        if(!postObj) {
            res.status(404).send("Post not found");
            return; // exit early beacuse we can't update likes for a post that doesn't exist
        }
        const likes = postObj.likes;

        if (likes.includes(username)) {
            await postsService.removePostLikes(postId, username);
        } else {
            await postsService.addPostLikes(postId, username);
        }
        const updatePostObj = await postsService.getPostById(postId);
        res.status(200).send(updatePostObj);
    }
}
module.exports = postsController;