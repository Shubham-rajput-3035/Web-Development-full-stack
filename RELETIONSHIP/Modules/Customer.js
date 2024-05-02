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

// const orderSchema = new Schema({
//   item: String,
//   price: Number,
// });

// const order = mongoose.model("order", orderSchema);

// const addOrder = async () => {
//   let res = await order.insertMany([
//     { item: "Samosa", price: "10" },
//     { item: "Guljamun", price: "12" },
//     { item: "Chips", price: "5" },
//     { item: "Juice", price: "20" },
//     { item: "Chocolate", price: "45" },
//   ]);
//   console.log(res);
// };
// addOrder();

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  Name: String,
  Orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "order",
    },
  ],
});

// customerSchema.pre("findOneAndDelete", async () => {
//   console.log("PRE MIDDLEWARE");
// });
// customerSchema.post("findOneAndDelete", async () => {
//   console.log(data);
// });

customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.Orders.length) {
    let res = await order.deleteMany({ _id: { $in: customer.Orders } });
    console.log(res);
  }
});

const order = mongoose.model("order", orderSchema);
const customer = mongoose.model("customer", customerSchema);

// const addCustomer = async () => {
//   let cust1 = new customer({
//     Name: "Ruhi Singh",
//   });
//   let order1 = await order.findOne({ item: "Chips" });
//   let order2 = await order.findOne({ item: "Chocolate" });

//   cust1.Orders.push(order1);
//   cust1.Orders.push(order2);

//   let result = await cust1.save();
//   console.log(result);

//   let result = await customer.find({});
//   console.log(result);
// };
// addCustomer();

// Function

const findCustomer = async () => {
  let result = await customer.find({}).populate("Orders");
  console.log(result[0]);
};
findCustomer();

const addCust = async () => {
  let newCust = new customer({
    Name: "Fulan Singh",
  });

  let newOrder = new order({
    item: "Burger",
    price: 30,
  });

  newCust.Orders.push(newOrder);

  await newOrder.save();
  await newCust.save();

  console.log("Added new customer");
};

// addCust();

const delCust = async () => {
  let data = await customer.findByIdAndDelete("6588edf473a986c587eb91c8");
  console.log(data);
};
delCust();
