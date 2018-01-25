const express = require("express");
const http = require("http");
const app = express();
const fetch = require("node-fetch");
const fs = require("fs");
const port = 3001;
const refreshInterval = 300000; // half an hour interval

const fetchMenuData = () =>
  fetch("http://vervesearch.com/test.json")
    .then(res => res.text())
    .then(body => {
      fs.writeFile("menuData.json", body, "utf8");
    });

const setMenuDataPool = () => {
  setInterval(() => {
    fetchMenuData();
  }, refreshInterval); // half an hour interval
};

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/menuData", (req, res) => {
  fs.readFile("menuData.json", "utf8", (err, data) => {
    if (err) throw err;
    res.status(200).send(JSON.parse(data));
  });
});

http.createServer(app).listen(port, () => {
  fetchMenuData();
  setMenuDataPool();
  console.log("App listening on port =", port);
});
