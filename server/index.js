const express = require("express");
const clientRoutes = require("./routes/Client");
const orderRoutes = require("./routes/Orders");
const transactionRoutes = require("./routes/Transaction");
const app = express();
app.use(express.json());

const database = require("./config/database");

database.connect();

app.use("/client", clientRoutes);
app.use("/orders", orderRoutes);
app.use("/transactions", transactionRoutes);

app.listen(4000, () => {
  console.log("APP connected");
});

app.get("/", (req, res) => {
  res.send(`<h1>Hello</h1>`);
});
