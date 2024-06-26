const express = require("express");
const router = express.Router();

// Todo : remove
const users = [
  { id: 1, firstName: "John", lastName: "Wick" },
  { id: 2, firstName: "Hari", lastName: "Seldon" },
  { id: 3, firstName: "John", lastName: "Wick" },
];

router.post("/", (req, res) => {
  console.log(req.body);
  res.status(201); // trimitem inapoi cand creem resurse
  res.send("Succesfuly created user");
});

router.get("/", (req, res) => {
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

module.exports = router;
