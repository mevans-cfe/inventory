const express = require("express");
const router = require("./routes/routes");
const config = require("./config");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 8000;

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(router);

mongoose
  .connect(config.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});
