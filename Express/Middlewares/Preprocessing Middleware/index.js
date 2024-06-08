import express from "express";

// body parsing middleware for parsing incoming request bodies
// before your handlers under the req.body property
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post("/submitForm", urlencodedParser, (req, res) => {
  console.log(req.body);
  res.status(201).sendFile("submit.html", { root: "public" });
});

// POST /hello gets urlencoded bodies
app.post("/hello", urlencodedParser, function (req, res) {
  res.send(`<h1>Hello, ${req.body.userName}</h1>`);
});

// start an express server
app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.status(201).sendFile("index.html", { root: "public" });
});
