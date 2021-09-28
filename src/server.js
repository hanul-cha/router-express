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

app.post("/api/users/info", async (req, res) => {
    const data = req.body.name;
    /* console.log(data); */
    console.log(data)

    const info = await parsing(data).then(ress => {
        /* console.log(ress)
        app.get("/api/users/info", (req, res) => {
            res.send(ress);
        }) */
        //서버에 send할 필요까지도 없고 리턴값으로 보내주면됨
        return ress
    })
    
    /* console.log(info); */
    return res.json({ success: info });
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


