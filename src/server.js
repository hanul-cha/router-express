const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const parsing = require("./test");
const dotenv = require("dotenv");
const db = require("./config/db");
const cors = require('cors');


dotenv.config({ path: ".env"});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/* 크로울링 api */ 

parsing().then(ress => {
    app.get("/api/users/info", (req, res) => {
        res.send(ress);
    })
});

app.get("/api/char", (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send("hi")
})



app.get("/api/db", (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    db.query(
        "SELECT * FROM users",
        (err, rows, fields) => {
            res.send(rows);
        }
    )
})

/* const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
}

app.use(cors(corsOptions)) */



module.exports = app;


