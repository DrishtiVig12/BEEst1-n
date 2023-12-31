const express = require("express");
const { connectToDb } = require("./middleware/db");
const app = express();

const Router = require('./Router/Routes');


connectToDb();
app.use(express.json());

app.use("", Router);

app.use((req,res,next) => {
    res.status(404).send("<h1>Home Page</h1>");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
