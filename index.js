const express = require("express");
const app = express();

const tweetsRouter = require("./routes/tweets");

const port = process.env.PORT || 5000;

app.use("/tweets/api", tweetsRouter);

app.listen(port, () => {
  console.log(`server is listening to port - ${port}`);
});
