const UserModel = require("../data/users.model");
const usersService = require('../services/users.service');

const usersController = {
    getUser: async (req, res) => {
        console.log("Reached GET user controller");
        const username = req.params.username;
        console.log(username);
        const userObj = await usersService.getUserByUsername(username);
        if(!userObj) {
            res.status(404).send("User not found");
            return;
        }
        res.status(200).send(userObj);
    },
    createUser: async (req, res)  => {
        console.log("Reached user controller");
        const userToBeCreated = req.body;
        console.log(userToBeCreated);

        // validate user object from request
        if (!userToBeCreated ||
            !userToBeCreated.id ||
            !userToBeCreated.firstname ||
            !userToBeCreated.lastname ||
            !userToBeCreated.username
        ) {
            res.status(400).send("Invalid user object");
            return;
        }
        usersService.createUser(userToBeCreated);
        res.status(201).send("User created successfully");
    },
    deleteUser: async (req, res) => {
        const userId = req.params.id;
        await usersService.deleteUser(userId);
        console.log(`Deleted user with id: ${userId}`);
        res.status(201).send('Deleted user successfully');
    },
    updateUser: async (req, res) => {
        const userId = req.params.id;
        await usersService.updateUser(userId);
        console.log(`Updated user with id: ${userId}`);
        res.status(201).send('Deleted user successfully');
    }
}
module.exports = usersController;