const usersService = require('../services/users.service');

const usersController = {
    getUser: async (req, res) => {
        console.log("Reached GET user controller");
        console.log(req.query.id);
        res.status(201).send("Reached GET user controller");
        //usersService.getUser(userObj);
    },
    createUser: async (req, res)  => {
        console.log("Reached user controller");
        const userToBeCreated = req.body;
        console.log(userToBeCreated);

        // validate user object from request
        if (!userToBeCreated ||
            !userToBeCreated.id ||
            !userToBeCreated.firstName ||
            !userToBeCreated.lastName ||
            !userToBeCreated.username
        ) {
            res.status(400).send("Invalid user object");
            return;
        }
        usersService.createUser(userToBeCreated);
        res.status(201).send("User created successfully");
    },
    deleteUser: async (req, res) => {
        console.log(`Delete user with id: ${userID}`);
        usersService.deleteUser(userID);
    }
}
module.exports = usersController;