const express = require("express");
const usersController = require('../controllers/users.controller');
const router = express.Router();

router.post('/', usersController.createUser);
router.get('/:username', usersController.getUser);
router.delete('/:id', usersController.deleteUser);
router.put('/:id', usersController.updateUser);

module.exports = router;
