const express = require("express");
const routes = require("./routes/api/index");
const bodyParser = require("body-parser");
const cors = require("cors");
const { handleError } = require("./helpers/error");

const app = express();

app.use(cors({ origin: "*" })); // allow all host 
app.use(bodyParser.urlencoded({ extended: "true" })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use("/", routes);

// should be at the end of app stack
app.use(handleError);

module.exports = app;
