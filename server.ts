require("dotenv").config({ path: "./.env.local" });
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 8080;
const mongoURL = process.env.DATABASE_URL;

app.use(cors());
app.use(express.json());

// connect to db
mongoose
  .connect(mongoURL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  })
  .catch((error: string) => {
    console.log(error);
  });
