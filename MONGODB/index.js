const mongoose = require("mongoose");

// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const user = mongoose.model("User", userSchema);

user
  .deleteOne({ age: 29 })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// user
//   .findOneAndUpdate({ name: "ankita" }, { age: 65 }, { new: true })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// user
//   .updateMany({ age: { $gt: 48 } }, { age: 29 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// user
//   .find({ age: { $gte: 18 } })
//   .then((res) => {
//     console.log(res[0].name);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// user
//   .insertMany([
//     { name: "shubham", email: "shubham7267@gmail.com", age: 18 },
//     { name: "saurabh", email: "saurabh7267@gmail.com", age: 28 },
//     { name: "shivam", email: "shivam7267@gmail.com", age: 38 },
//   ])
//   .then((res) => {
//     console.log(res);
//   });

// const user2 = new user({
//   name: "ankita",
//   email: "ankita9765@gamil.com",
//   age: 18,
// });

// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
