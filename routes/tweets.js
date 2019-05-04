const express = require("express");
const router = express.Router();

const Twitter = require("../config/index");

router.post("/post", () => {
  console.log("posting");
  Twitter.post("statuses/update", { status: "hello world!" }, function(
    err,
    data,
    response
  ) {
    console.log(data);
    console.log(err);
  });
});

module.exports = router;
