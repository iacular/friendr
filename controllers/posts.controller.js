const postsService = require('../services/posts.service');

const postsController = {
    createPost: (postObj) => {
        console.log("Reached post controller");
        console.log(postObj);
        postsService.createPost(postObj);
    },
    deletePost: (postId) => {
        console.log(`Delete post with id: ${postId} in controller`);
        postsService.deletePost(postId);
    }
}

module.exports = postsController;
