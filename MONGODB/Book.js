const mongoose = require("mongoose");

// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    maxlength: 20,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    max: 1,
  },
  discount: {
    type: Number,
    default: 0,
  },
});

const Book = mongoose.model("Book", BookSchema);

let book1 = new Book({
  title: "Mathematics XII",
  author: "R.D sharma",
  price: 1200,
});

book1
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
