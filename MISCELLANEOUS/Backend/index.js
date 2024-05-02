const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.get("/ragister", (req, res) => {
  let { user, passward } = req.query;
  res.send(`standard GET response. Welcome ${user}!`);
});

app.post("/ragister", (req, res) => {
  let { user, passward } = req.body;
  res.send(`standard POST response  Welcome ${user}!`);
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
