const UserModel = require('../data/users.model');

const usersService = {
    getUserById: async(userId) => {
        const response = await UserModel.findOne({id: userId}, {});
            return response;
    },
    getUserByUsername: async(username) => {
        const response = await UserModel.findOne({username: username}, {firstname: 1, lastname: 1, username: 1, _id: 0});
            return response;
    },
    createUser: (userObj) => {
        console.log("Reached user service.");
        console.log(userObj);
        const userToBeCreated = new UserModel(userObj);
        userToBeCreated.save().then(() => console.log('User created'));
        
    },
    deleteUser: async(userId) => {
        const response = await UserModel.deleteOne({id: userId});
        return response;
    },
    updateUser: async(userId) => {
        const response = await UserModel.updateOne({id: userId}, {});
        return response;
    }
}

module.exports = usersService;