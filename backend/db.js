const mongoose = require("mongoose");
require("dotenv").config();
const mongoURL = process.env.MONGO_URL;

console.log(mongoURL);

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("Could not connected to db ", err);
  });

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todos = mongoose.model("todo", todoSchema);

module.exports = { todos: todos };
