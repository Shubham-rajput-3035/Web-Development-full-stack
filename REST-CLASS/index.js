const { log } = require("console");
const express = require("express");
const app = express();
const port = 8080;

const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("View engine", "ejs");
app.set("Views", path.join(__dirname, "Views"));

app.use(express.static(path.join(__dirname, "Public")));

let posts = [
  {
    id: uuidv4(),
    username: "Shubham Singh",
    content: " I Love Coding",
  },
  {
    id: uuidv4(),
    username: "Nidhi singh",
    content: " I Love My Country",
  },
  {
    id: uuidv4(),
    username: "Ankit singh",
    content: " I Love Sapna",
  },
  {
    id: uuidv4(),
    username: "shivam singh",
    content: " I Love Kriti",
  },
  {
    id: uuidv4(),
    username: "Rahul singh",
    content: " I Love Swati",
  },
];

app.get("/posts", (req, res) => {
  // res.send("Serving working well!");
  res.render("index.ejs", { posts });
});
app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});
app.post("/posts", (req, res) => {
  // console.log(req.body);
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  // res.send("post requests working");
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  // console.log(post);
  // res.send("request working");
  res.render("show.ejs", { post });
});
app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content = newContent;
  console.log(post);
  res.send("patch request working");
});
app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  // res.send("Delete Success");
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log(`Listening to port:8080`);
});
