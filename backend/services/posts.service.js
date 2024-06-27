const postService = {
    createPost: (userObj)  => {
        console.log("Reached post service");
        console.log(userObj);
    },
    deletePost: (userId)  => {
        console.log(`Deleted post ${userId} in service`);
        console.log(userId);
    }
}
module.exports = postService;