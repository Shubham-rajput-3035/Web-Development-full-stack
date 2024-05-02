const express = require("express");
const app = express();
const expressError = require("./ExpressError");

app.use((req, res, next) => {
  // let { query } = req.query;
  // console.log(query);
  console.log("Hii, I am Frist MiddleWare");
  // res.send("MiddleWare Finished");
  next();
});

app.use((req, res, next) => {
  console.log("Hii, I am Second MiddleWare");
  next();
});
const cheeckToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  // res.send("ACCESS DENIED");
  throw new expressError(401, "ACCESS DENIED");
};

// Logger-morgan
// app.use((req, res, next) => {
//   // req.time = new Date(Date.now()).toISOString();
//   // console.log(req.method, req.hostname, req.path.req.time);
//   console.log(req);
//   next();
// });

app.use((req, res, next) => {
  console.log("I am only for Random");
  next();
});

app.get("/api", cheeckToken, (req, res) => {
  res.send("Data");
});

app.get("/", (req, res) => {
  res.send("Hii, I am root");
});

app.get("/random", (req, res) => {
  res.send("This is a random page");
});

// error rout
app.get("/err", (req, res) => {
  abcd = efghij;
});

app.get("/admin", (req, res) => {
  throw new expressError(403, "ACCESS TO ADMIN IS FORBIDED");
});

app.use((err, req, res, next) => {
  // console.log(err);
  let { status = 500, message = "Some error occured" } = err;
  res.status(status).send(message);
  // next(err);
  // res.send(err);
});

// 404
app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(8080, () => {
  console.log("Server listing to port 8080");
});
