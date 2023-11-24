const express = require("express");
const cors = require("cors");
// const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require('path');
const fs = require("fs")
require('dotenv').config();

// const secrteKey = process.env.SECRTE_KEY;
const port = 8000;
const app = express();
app.use(express.json())
// app.use(express.static("src"));
// let corOptions = {oirign: `http://localhost:8081`}
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors())
// app.use(
//     session({
//         secret: secrteKey, //a secret key used to encrypt  the session cookie
//         resave: false,
//         saveUninitialized: false,
//         cookie: {
//             secure: false,
//             maxAge: 24 * 60 * 60 * 1000,
//         }, // set the session cookie properties
//     })
// );
app.use('/public', express.static(path.join(__dirname, 'public')));
var routePath = path.resolve(__dirname) + "/src/routes/"; //add one folder then put your route files there my router folder name is routers
fs.readdirSync(routePath).forEach(function (file) {
    const route = require(routePath + file);
    app.use(route);
});

app.listen(port, () => { console.log(`Server in running on port ${port}`) });
