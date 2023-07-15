//common.js

const express = require("express");
const mongoose = require("mongoose");
const bookRouter = require("./routes/book");
require("dotenv").config();
// const cors = require("cors");

const app = express();

//setting up our server

const PORT = 2000;
// console.log('port', PORT);

// console.log(process.env.MONGODB_URI);

// connecting our app to our database(Mongodb atlas)
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("DB connection is successful");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
// app.use(cors({ origin: "*" }));
app.use("/api/book", bookRouter);

//setting up our server
app.listen(PORT, () => {
  console.log(`server is up and running on port ${PORT}`);
});
