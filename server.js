const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");
const parsing = require("./test");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log(parsing);

const data = fs.readFileSync("./src/config/db.json");
const conf = JSON.parse(data);

app.get("/api/users", (req, res) => {
    res.send(conf);
})

module.exports = app;

