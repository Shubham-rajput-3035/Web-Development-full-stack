const mongoose = require("mongoose");
const chat = require("./Models/Chat.js");

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

let chats = [
  {
    from: "Niharika",
    to: "Ankit",
    message: "Send your notes",
    created_at: new Date(),
  },
  {
    from: "Nidhi",
    to: "Shubham",
    message: "Send your beautiful pic",
    created_at: new Date(),
  },
  {
    from: "prity",
    to: "Saurabh",
    message: "i am coming to meet you",
    created_at: new Date(),
  },
  {
    from: "Rubi",
    to: "Ankit",
    message: "Send your notes",
    created_at: new Date(),
  },
];

chat.insertMany(chats);
