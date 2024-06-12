import express from "express";
import ejs from "ejs";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.static("views"));

// start a new server
app.listen(port, () =>
  console.log(`Server is running on: http://localhost:${port}`)
);

// return index page
app.get("/", (req, res) => {
  const d = new Date();
  let day = d.getDay();
  const fruitsList = ["apple", "orange", "grape", "pear"];
  res
    .status(201)
    .render("index.ejs", { root: "views", day: day, fruits: fruitsList });
});

// return parse page
app.get("/parse", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<em>this is html</em>",
  };

  res.status(201).render("parse.ejs", data);
});
