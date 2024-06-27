const mongoose = require('mongoose');

const UserModel = mongoose.model('User',
    {
        id: Number,
        firstName: String,
        lastName: String,
        username: String,
        birthyear: Number,
    }
);

module.exports = UserModel;