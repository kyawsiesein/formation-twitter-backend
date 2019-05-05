const express = require("express");
const router = express.Router();

const client = require("../config/index");

router.post("/search", (request, res) => {
  const { username } = request.body;
  const params = { q: username };
  try {
    client.get("/users/search.json?", params, (err, data, response) => {
      if (!!err) {
        return res.status(400).send({ message: "Something went wrong" });
      }
      return res.json({ users: data });
    });
  } catch (error) {
    console.error(`Throw error in /currentuser route ${error}`);
  }
});

module.exports = router;
