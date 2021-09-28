const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const parsing = require("./test");
const dotenv = require("dotenv");
const db = require("./config/db");
const cors = require('cors');

const corsOptions = {
    origin: '*',
    credentials: true,
}

app.use(cors(corsOptions))

dotenv.config({ path: ".env"});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/* 크로울링 api */ 

app.post("/api/users/info", (req, res) => {
    const data = req.body;
    /* console.log(data); */

    parsing(data.name).then(ress => {
        app.get("/api/users/info", (req, res) => {
            res.send(ress);
        })
    });
    return res.json({ success: true });
})


app.get("/api/db", (req, res) => {
    /* res.set('Access-Control-Allow-Origin', '*'); */
    db.query(
        "SELECT * FROM users",
        (err, rows, fields) => {
            res.send(rows);
        }
    )
})





module.exports = app;


