const express = require("express");
const usersController = require('../controllers/users.controller');
const router = express.Router();

// Todo : remove
const users = [
  { id: 1, firstName: "John", lastName: "Wick" },
  { id: 2, firstName: "Hari", lastName: "Seldon" },
  { id: 3, firstName: "John", lastName: "Wick" },
];

router.post("/", (req, res) => {
  usersController.createUser(req.body); // req.body vine de la postman
  res.status(201); // trimitem inapoi cand creem resurse
  res.send("Succesfuly created user");
});

router.get("/:id", (req, res) => {
  console.log(req.query.id);
  const reqUserId = req.query.id;
  let found = false;
  for (let user of users) {
    if (user.id == reqUserId) {
      res.send(user);
      return;
    }
  }
  if (!found) {
    res.status(404);
    res.send("User not found");
  }
});

router.delete("/:id", (req, res) => {
    const reqUserId = req.params.id;
    usersController.deleteUser(reqUserId);
    res.status(200).send("User deleted successfully");
});

module.exports = router;
