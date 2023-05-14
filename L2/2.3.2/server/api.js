var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());

var bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

exports.app = app;

let users = require("./users.json");

app.get("/", function (request, response) {
  response.json("node.js backend");
});

app.get("/", function (request, response) {
  response.json(users);
});

app.put("/users", function (request, response) {
  users[users.length] = request.body;
  response.json(request.body);
});

app.delete("/users/:index", function (request, response) {
  users.splice(request.params.index, 1);
  response.json("User with index " + request.params.index + " was deleted");
});

app.post("/users/:index", function (request, response) {
  users[request.params.index] = request.body;
  response.json(request.body);
});

app.listen(3000, function () {
  console.log("CORS-enabled web server is listening on port 3000...");
});
