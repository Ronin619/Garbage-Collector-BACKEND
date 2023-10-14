require("dotenv").config({ path: "./.env.local" });
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 8080;

const mongoURL = process.env.DATABASE_URL;
mongoose.connect(mongoURL, { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", (error: string) => {
  console.log(error);
});
db.once("connected", () => {
  console.log("Database Connected");
});

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
