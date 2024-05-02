const express = require("express");
const app = express();
const path = require("path");

const port = 8080;


// app.use(express.static("Public"));
app.use(express.static(path.join(__dirname,"Public")));

app.set("Views engine", "ejs");
app.set("Views", path.join(__dirname, "/Views"));

app.get("/", (req, res) => {
  res.render("Home.ejs");
  // res.send("This is a home");
});

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.get("/Rolldice", (req, res) => {
  let num = Math.floor(Math.random() * 6) + 1;
  res.render("Rolldice.ejs", { diceval: num });
  // res.render("Rolldice.ejs")
});

// Instagram EJS

// app.get("/ig/:Username", (req, res) => {
  // const Follower=["Ankit","Rima","Kajal","Nidhi","Neha","Khushi"];
  // let {Username} = req.params;
  // console.log(Username);
  // res.render("Instagram.ejs",[Username, Follower]);




  app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  // const instaData = require("./Data.json");
  const instaData = require("./Data.json");
  const Data = instaData[username];
  // console.log(instaData);
  if (Data) {
    res.render("Instagram.ejs", { Data });
  } else {
    res.render("Error.ejs");
  }
});




app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
