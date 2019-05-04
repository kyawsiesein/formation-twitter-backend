const express = require("express");
const app = express();

const keys = {
  consumer_key: "EbGAGoPB2znRDXPuqLJ37hXHx",
  consumer_secret: "DEPJY2swKismS3CZRxg24PfOGkJmSwE70pzjcQBonFMSBLfvsX",
  access_token_key: "1124460551130587139-l3kqvkjKaHkpEfnXxYKnWjdCzaJRFo",
  access_token_secret: "Teq0fJd6w40CfQkSz4uBhCbu4FJlFyz0TzdsQftvcDu0P"
};

const port = process.env.PORT || 5000;

const Twitter = require("twitter")({ keys });

app.post("/", () => {
  Twitter.post("statuses/update", { status: "hello world!" }, function(
    err,
    data,
    response
  ) {
    console.log(data);
    console.log(err);
  });
});

app.listen(port, () => {
  console.log(`server is listening to port - ${port}`);
});
