var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(
    bodyParser.json({
        verify(req, res, buf) {
            req.rawBody = buf;
        }
    })
);

require("./src/routes/main")(app);

app.listen(80, function() {
    console.log("Example app listening on port 80!");
});