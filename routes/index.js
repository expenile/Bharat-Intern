const express = require("express");
const router = express.Router();
const userModel = require("./users");
const bodyParser = require("body-parser");

router.use(express.urlencoded({ extended: true }));

router.get("/", function (req, res) {
  res.render("index");
});

router.post("/sign_up", async function (req, res) {
  try {
    const { name, age, phone, email, gender, password } = req.body;

    const newUser = new userModel({
      username: name,
      age: age,
      phone: phone,
      email: email,
      gender: gender,
      password: password,
    });

    await newUser.save();

    res.redirect("/success");
  } catch (error) {
    console.error(error);
    res.redirect("/error");
  }
});

router.get("/success", function (req, res) {
  res.render("success");
});

module.exports = router;
