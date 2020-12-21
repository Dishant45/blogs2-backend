const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = express();

mongoose.connect(
  process.env.URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("could not connect to database");
    } else {
      console.log("connected to database");
    }
  }
);

app.use(express.json());
const blogRouter = require("./routes/blogroutes");
app.use("/blog", blogRouter);

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log("server failed to start");
  } else {
    console.log(`server started at ${process.env.PORT}`);
  }
});
