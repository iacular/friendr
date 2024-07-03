const PostModel = require('../data/posts.model');
const { v4: uuidv4 } = require('uuid');

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
    
        postObj.date = new Date().toISOString();
        postObj.id = uuidv4(); // generate a random id

        const postToBeCreated = new PostModel(postObj);
        postToBeCreated.save().then(() => console.log('Post created'));
    },
    deletePost: async (postId)  => {
        console.log(`Deleted post ${postId} in service`);
        const response = await PostModel.deleteOne({id: postId});
        return response;
    },
    removePostLikes: async (postId, username) => {
        await PostModel.updateOne({id: postId}, { $pull: { likes: username } });
    },
    addPostLikes: async (postId, username) => {
        await PostModel.updateOne({id: postId}, { $push: { likes: username } });
    }
}
module.exports = postsService;