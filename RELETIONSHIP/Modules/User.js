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
  Address: [
    {
      _id: false,
      Location: String,
      City: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

let addUsers = async () => {
  let User1 = new User({
    Username: "Shubham Singh",
    Address: [
      {
        Location: "821108 Kewrhi Kudra kaimur",
        City: "Kudra",
      },
    ],
  });
  User1.Address.push({
    Location: "821115 Dharamshala road sasaram",
    City: "Sasaram",
  });
  let result = await User1.save();
  console.log(result);
};
addUsers();
