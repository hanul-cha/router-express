const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const parsing = require("./test");
const dotenv = require("dotenv");
const db = require("./src/config/db");

dotenv.config({ path: ".env"});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/* 크로울링 api */
parsing("한울아잘하자").then(ress => {
        app.get("/api/users/info", (req, res) => {
            res.send(ress);
        })
    });



app.get("/api/db", (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    db.query(
        "SELECT * FROM users",
        (err, rows, fields) => {
            res.send(rows);
        }
    )
})




module.exports = app;

