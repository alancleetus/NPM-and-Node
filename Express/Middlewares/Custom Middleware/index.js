import express from "express";
const app = express();
const port = 3000;

//customLogFunction
const customLogger = (req, res, next) => {
  console.log("Custom logger: " + req.method);
  console.log("Custom logger: " + req.url);
  /**
   * *next()- shows when to move on from the middleware
   *          *since there might be multiple
   * !without next(), page would timeout
   * */
  next();
};

app.use(customLogger);

// start an express server
app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello");
});
