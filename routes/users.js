const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Bharat-1");
const userSchema = mongoose.Schema({
  username: String,
  age: Number,
  phone: Number,
  email: String,
  gender: String,
  password: String,
});

module.exports = mongoose.model("user", userSchema);
