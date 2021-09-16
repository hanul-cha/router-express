const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");
const parsing = require("./test");
const db = require("./src/config/db");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/* 크로울링 api */
parsing("한울아잘하자").then(ress => {
        app.get("/api/users/info", (req, res) => {
            res.send(ress);
        })
    });




module.exports = app;

