const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

const port = process.env.PORT || 5000;
const tweetsRouter = require("./routes/tweets");
const usersRouter = require("./routes/users");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/tweets", tweetsRouter);
app.use("/api/users", usersRouter);

app.listen(port, () => {
  console.log(`server is listening to port - ${port}`);
});
