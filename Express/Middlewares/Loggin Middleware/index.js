import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

/**
 * *Morgan - middleware that will print out request details before the request is processed
 * combined - "::ffff:127.0.0.1 - - [08/Jun/2024:04:10:38 +0000] "GET / HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0""
 * common - "::ffff:127.0.0.1 - - [08/Jun/2024:04:11:39 +0000] "GET / HTTP/1.1" 304 -"
 * dev - "GET / 304 3.181 ms - -" or "POST /submitForm 201 4.120 ms - 231"
 * short - "::ffff:127.0.0.1 - GET / HTTP/1.1 304 - - 3.203 ms"
 * tiny - "GET / 304 - - 3.023 ms"
 */
app.use(morgan("tiny"));

/**
 * routing pages */
app.use(express.static("public"));

app.post("/submitForm", (req, res) => {
  console.log(req.body);
  res.status(201).sendFile("submit.html", { root: "public" });
});

// start an express server
app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.status(201).sendFile("index.html", { root: "public" });
});
