const express = require("express");
const app = express();
let middleware = require("../server/routes");
const cors = require("cors");

app.use(cors());
app.use("/representatives", middleware);
app.use("/senators", middleware);
 
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

module.exports = app;