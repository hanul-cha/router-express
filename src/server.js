const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const parsing = require("./test");
const dotenv = require("dotenv");
const db = require("./config/db");


dotenv.config({ path: ".env"});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/* 크로울링 api */ 
async function useParsing(req, res) {
    const user = req.body;
    return user

    /* parsing().then(ress => {
        app.get("/api/users/info", (req, res) => {
            res.send(ress);
        })
    }); */
}

app.post("/api/users/info", useParsing)




app.get("/api/db", (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    db.query(
        "SELECT * FROM users",
        (err, rows, fields) => {
            res.send(rows);
        }
    )
})


module.exports = useParsing;
module.exports = app;


