const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const chat = require("./Models/Chat.js");
const Chat = require("./Models/Chat.js");
const mathodOverride = require("method-override");
const ExpressError = require("./ExpressError");
const { log } = require("console");

app.set("Views", path.join(__dirname, "Views"));
app.set("View engine", "ejs");
app.use(express.static(path.join(__dirname, "Public")));
app.use(express.urlencoded({ extended: true }));
app.use(mathodOverride("_method"));
// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  // await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
  await mongoose.connect("mongodb://127.0.0.1:27017/Fakewhatsapp");
}

// Index Route
app.get("/chats", async (req, res) => {
  try {
    let chats = await chat.find();
    // console.log(chats);
    res.render("index.ejs", { chats });
  } catch (err) {
    next(err);
  }
});

// New Route
app.get("/Chats/new", (req, res) => {
  // throw new ExpressError(404, "Page not found");
  res.render("New.ejs");
});

// Create Route

// app.post("/Chats", (req, res) => {
//   let { from, to, msg } = req.body;
//   let newChat = new Chat({
//     from: from,
//     to: to,
//     message: msg,
//     created_at: new Date(),
//   });
//   newChat
//     .save()
//     .then((res) => {
//       console.log("Chat was Saved");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   res.redirect("/Chats");
// });

app.post("/Chats", async (req, res, next) => {
  try {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
      from: from,
      to: to,
      message: message,
      created_at: new Date(),
    });
    await newChat.save();
    res.redirect("/Chats");
  } catch (err) {
    next(err);
  }
});

// Edit  Route
app.get("/Chats/:id/edit", async (req, res) => {
  try {
    let { id } = req.params;
    let chats = await Chat.findById(id);
    res.render("Edit.ejs", { chats });
  } catch (err) {
    next(err);
  }
});

// Function
function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

// NEW-SHOW  Route
app.get(
  "/Chats/:id",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chats = await Chat.findById(id);
    if (!chats) {
      next(new ExpressError(404, "Chats not found"));
    }
    res.render("Edit.ejs", { chats });
  })
);

// Update Route
app.put("/Chats/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let { msg: newmsg } = req.body;
    console.log(newmsg);
    let Updatedchats = await Chat.findByIdAndUpdate(
      id,
      { message: newmsg },
      { runValidators: true, new: true }
    );
    console.log(Updatedchats);
    res.redirect("/Chats");
  } catch (err) {
    next(err);
  }
});

// Delete & Detory Route
app.delete("/Chats/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let Deletedchats = await Chat.findByIdAndDelete(id);
    console.log(Deletedchats);
    res.redirect("/Chats");
  } catch (err) {
    next(err);
  }
});

// let Chat1 = new chat({
//   from: "Neha",
//   to: "Amit",
//   message: "Send your pic",
//   created_at: new Date(),
// });

// Chat1.save().then((res) => {
//   console.log(res);
// });

app.get("/", (req, res) => {
  res.send("Root is working");
});

// ERROR-HANDLING MIDDLEWARE

const handleValidationError = (err) => {
  console.log("This was a ValidationError. Pleasr follow the rules");
  console.dir(err.message);
  return err;
};

app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "ValidationError") {
    err = handleValidationError(err);
  }
  next(err);
});

app.use((err, req, res, next) => {
  let { status = 500, message = "Some error Occured" } = err;
  res.status(status).send(message);
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
