const mongoose = require('mongoose');

const PostModel = mongoose.model('Post',
    {
        id: Number, 
        date: String,
        user_id: Number,
        title: String,
        description : String,
    }
);

module.exports = PostModel;