const express = require("express");
const res = require("express/lib/response");
const app = express();

// console.dir(app);

let port = 8080;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
app.get("/:Username/:Id", (req, res) => {
  let { Username, id } = req.params;
  // let htmlstr = <h1>Welcome to the page of @${username}</h1>;
  // res.send(htmlstr);
  res.send(`Welcome to the page of @${username}`);
});

// app.use((req, res) => {
//(request, response)
// console.log(req);
//   console.log("request received");
//   res.send("This is a basic response");
// res.send({
//     name :"apple",
//     color :"red"
// });

//   res.send("<h1>Shubham Singh</h1>");

//   let code =
//     "<h1>Fruits</h1> <ul> <li>Apple</li> <li>Banana</li> <li>Orange</li> <li>Papaya</li> <li>Grapes</li> </ul>";
//   res.send(code);
// });

// app.get("/", (req, res) => {
//   res.send("You connect with root path");
// });

// app.get("/Search", (req, res) => {
//   res.send("You connect with root Search path");
// });

// app.get("/Home", (req, res) => {
//   res.send("You connect with root Home path");
// });

// app.get("*", (req, res) => {
//   res.send("This path is not exit here");
// });

// app.post("/", (req, res) => {
//     res.send("you connect with post root path");
//   });


app.get ("/search", (req, res)=>{
  let {q}= req.query;
  res.send(`Search results for query:@${q} `);
});
