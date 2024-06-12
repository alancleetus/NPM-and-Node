import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("views"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { pageHeader: "Enter Your Name" });
});

app.post("/submit", (req, res) => {
  const fName = req.body.fName;
  const lName = req.body.lName;
  const count = fName.length + lName.length;
  res.render("index.ejs", {
    pageHeader: `Your Name:\"${fName} ${lName}\" contains ${count} letters`,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
