let express = require("express");
let app = express();
let axios = require("axios");

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/picture", (req, res) => {
  res.sendfile("worldmap.jpg");
});

app.get("/ageofinnocence", (req, res) => {
  let response = null;
  axios
    .get(
      "https://github.com/mdcrawford/launch-swe-2018/blob/master/week4/library/ageofinnocence.txt"
    )
    .then(ares => {
      res.send(ares.data);
    });
});

app.listen(3000, () => {
  console.log("success!");
});
