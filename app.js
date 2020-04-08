const express = require("express");
const app = express();
const pug = require("pug");

/*app.get("/", (req, res) => {
  res.send("index" + req.query.name + "!");
});*/

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/index", (req, res) => {
  res.render(req.query.name);
});

app.listen(3000, () => console.log("Listening on port 3000!"));
