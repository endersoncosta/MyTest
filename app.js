var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const dotenv = require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

app.use(
    bodyParser.json()
);

app.use("/", express.static("public"));

require("./src/routes/main")(app);

module.exports = app;