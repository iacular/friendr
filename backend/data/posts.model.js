const mongoose = require('mongoose');

const PostModel = mongoose.model('Post',
    {
        id: String,
        date: String,
        author: String,
        title: String,
        description : String,
    }
);

module.exports = PostModel;