require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

const connection = require("./db/connection");
connection();

const transaction = require("./routes/transaction");

app.use("/addtransaction", transaction);

app.listen(PORT, () => {
  console.log(` server is up and running on  port ${PORT}`);
});
