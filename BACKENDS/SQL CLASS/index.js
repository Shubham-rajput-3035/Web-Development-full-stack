const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engin", "ejs");
app.set("views", path.join(__dirname, "/Views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "facebook",
  password: "@Smartboy7325",
});
// let qu = "SHOW TABLE";
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// let qu = "INSERT INTO user(id,username,email,password) VALUES ?";
// let data = [];
// for (let index = 1; index <= 100; index++) {
//   data.push(getRandomUser());
// }
// try {
//   connection.query(qu, [data], (err, results) => {
//     if (err) throw err;
//     console.log(results);
//   });
// } catch (err) {
//   console.log(err);
// }

// connection.end();

// Home route
app.get("/", (req, res) => {
  let q = `SELECT Count(*) FROM user`;
  try {
    connection.query(q, (err, results) => {
      if (err) throw err;
      let counts = results[0]["Count(*)"];
      res.render("Home.ejs", { counts });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in DB");
  }
});

// Show Route
app.get("/User", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, FBusers) => {
      if (err) throw err;
      res.render("ShowUsers.ejs", { FBusers });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in DB");
  }
});

// Edit Route
app.get("/User/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (err, results) => {
      if (err) throw err;
      let user = results[0];
      res.render("Edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in DB");
  }
});
// UPdate Route
app.patch("/User/:id", (req, res) => {
  let { id } = req.params;
  let { password: formpassword, usename: newusername } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (err, results) => {
      if (err) throw err;
      let user = results[0];
      // res.render("Edit.ejs", { user });
      if (formpassword != user.password) {
        res.send("Wrong password");
      } else {
        let q2 = `UPDATE user SET username='${newusername}' WHERE id='${id}'`;
        connection.query(q2, (err, results) => {
          if (err) throw err;
          res.send(results);
          // res.redirect("/User");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in DB");
  }
});

app.listen("8080", () => {
  console.log("Server is listning to port 8080");
});

// let user = [
//   ["123a", "123-newuser", "abcd@gmail.com", "ab12334"],
//   ["123ac", "123-newusers", "abcde@gmail.com", "ab123345"],
// ];
// try {
//   connection.query(qu, [user], (err, results) => {
//       if (err) throw err;
//       console.log(results);
//   });
// } catch (err) {
//   console.log(err);
// }

// connection.end();

// let getRandomUser = () => {
//   return {
//     id: faker.string.uuid(),
//     username: faker.internet.userName(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//   };
// };

// console.log(getRandomUser());

// let createRandomUser = () => {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.userName(),
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//   };
// };

// console.log(createRandomUser());
