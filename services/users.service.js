const UserModel = require('../data/users.model');

const usersService = {
    createUser: (userObj)  => {
        console.log("Reached user service");
        console.log(userObj);
        const userToBeCreated = new UserModel(userObj);
        userToBeCreated.save().then(() => console.log('User created'));
    },
    deleteUser: (userId)  => {
        console.log(`Deleted user ${userId} in service`);
        console.log(userId);
    }
}
module.exports = usersService;