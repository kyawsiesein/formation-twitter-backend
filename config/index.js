const keys = {
  consumer_key: "EbGAGoPB2znRDXPuqLJ37hXHx",
  consumer_secret: "DEPJY2swKismS3CZRxg24PfOGkJmSwE70pzjcQBonFMSBLfvsX",
  access_token_key: "1124460551130587139-l3kqvkjKaHkpEfnXxYKnWjdCzaJRFo",
  access_token_secret: "Teq0fJd6w40CfQkSz4uBhCbu4FJlFyz0TzdsQftvcDu0P"
};
const Twitter = require("twitter")({ keys });

module.exports = Twitter;
