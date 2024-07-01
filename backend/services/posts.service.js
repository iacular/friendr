const PostModel = require('../data/posts.model');

const postsService = {
    getPostById: async (postId) => {
        const response = await PostModel.findOne({id: postId}, { _id: 0});
            return response;
    },
    getPosts: async () => {
        const response = await PostModel.find();
        return response;
    },
    createPost: (postObj)  => {
        console.log("Reached post service");
        console.log(postObj);
        const postToBeCreated = new PostModel(postObj);
        postToBeCreated.save().then(() => console.log('Post created'));
    },
    deletePost: async (postId)  => {
        console.log(`Deleted post ${postId} in service`);
        const response = await PostModel.deleteOne({id: postId});
        return response;
    }
}
module.exports = postsService;