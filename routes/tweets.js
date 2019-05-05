const express = require("express");
const router = express.Router();

const client = require("../config/index");

/* fetching tweets */
router.get("/all", (req, res) => {
  const params = { screen_name: "kyawsiesein", count: 20 };
  client.get("statuses/user_timeline", params, function(err, tweets, response) {
    if (!!err) {
      return res.status(400).send({ message: "Something went wrong" });
    }
    return res.json({ tweets });
  });
});

/* searching tweets by keyword */
router.get("/search", (req, res) => {
  const { keyword } = req.query;
  client.get("search/tweets", { q: keyword }, function(err, tweets, response) {
    if (!!err) {
      return res.status(400).send({ message: "Something went wrong" });
    }
    return res.json({ tweets });
  });
});

/* posting tweets */
router.post("/post", (request, res) => {
  const status = request.body.status;
  client.post("statuses/update", { status }, function(err, data, response) {
    if (!!err) {
      return res.status(400).send({ message: "Something went wrong" });
    }
    return res.json(data);
  });
});

/* retweeting */
router.post("/retweet", (request, res) => {
  const { tweetId } = request.body;
  const params = { id: tweetId };
  client.post(`statuses/retweet/`, params, function(err, data, response) {
    if (!!err) {
      console.log(err);
      return res.status(400).send({ message: "Something went wrong" });
    }
    console.log("retweeting");
    return res.json(data);
  });
});

/* retweeting */
router.post("/unretweet", (request, res) => {
  const { tweetId } = request.body;
  const params = { id: tweetId };
  client.post(`statuses/unretweet/`, params, function(err, data, response) {
    if (!!err) {
      console.log(err);
      return res.status(400).send({ message: "Something went wrong" });
    }
    console.log("retweeting");
    return res.json(data);
  });
});

/* like / favorite */
router.post("/like", (request, res) => {
  const { tweetId } = request.body;
  const params = { id: tweetId };
  client.post(`/favorites/create`, params, function(err, data, response) {
    if (!!err) {
      console.log(err);
      return res.status(400).send({ message: "Something went wrong" });
    }
    return res.json(data);
  });
});

/* like / favorite */
router.post("/dislike", (request, res) => {
  const { tweetId } = request.body;
  const params = { id: tweetId };
  client.post(`/favorites/destroy`, params, function(err, data, response) {
    if (!!err) {
      return res.status(400).send({ message: "Something went wrong" });
    }
    return res.json(data);
  });
});

module.exports = router;
