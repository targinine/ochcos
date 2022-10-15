const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, "/public")));

app.get('/', (req, res) => {
    res.send("index.html");
});

app.listen(port, () => {
    console.log("ochcos running on port 3000!");
});
