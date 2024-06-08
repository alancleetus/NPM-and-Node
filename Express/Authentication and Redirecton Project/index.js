//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post("/check", urlencodedParser, (req, res) => {
  console.log(req.body);
  if (req.body["password"] === "ILoveProgramming")
    res.status(201).sendFile("secret.html", { root: "public" });
  else res.status(201).sendFile("index.html", { root: "public" });
});

// start an express server
app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.status(201).sendFile("index.html", { root: "public" });
});
