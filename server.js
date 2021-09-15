const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");
const parsing = require("./test");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

parsing("한울아잘하자").then(ress => {
        app.get("/api/users", (req, res) => {
            res.send(ress);
        })
    })

const data = fs.readFileSync("./src/config/db.json");
const conf = JSON.parse(data);



module.exports = app;

