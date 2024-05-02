// getting-started.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/reletionDemo");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema = new Schema({
  Username: String,
  email: String,
});
const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

// const addData = async () => {
//   //   let user1 = new User({
//   //     Username: "Shubham Singh",
//   //     email: "shubhamsingh7366@gmail.com",
//   //   });
//   //   let post1 = new Post({
//   //     content: "Smart Boy",
//   //     likes: 5000,
//   //   });

//   let user = await User.findOne({ Username: "Shubham Singh" });

//   let post2 = new Post({
//     content: "Rajputana Boy",
//     likes: 800,
//   });
//   //   post1.user = user1;

//   //   await user1.save();
//   //   await post1.save();

//   post2.user = user;

//   await post2.save();
// };
// addData();

// const del = async () => {
//   await Post.findByIdAndDelete("6587b0a327db275d33d94119");
//   await User.findByIdAndDelete("658666508d6675d201f87247");
// };
// del();

const getData = async () => {
  let result = await Post.findOne({}).populate("user", "Username");
  console.log(result);
};
getData();
