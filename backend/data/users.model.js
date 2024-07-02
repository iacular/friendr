const mongoose = require('mongoose');

const UserModel = mongoose.model('User',
    {
        id: Number,
        firstname: String,
        lastname: String,
        username: String,
        birthyear: Number,
    }
);

module.exports = UserModel;