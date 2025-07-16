var express = require('express');
const userModel = require('../models/userModel');
var router = express.Router();
var bcrypt = require("bcryptjs");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/signUp", async (req, res) => {
  let [username, name, email, phone, password] = req.body;
  let emailCon = await userModel.findOne({ email: email });
  let phoneCon = await userModel.findOne({ phone: phone });
  if (emailCon) {
    return res.json({ success: false, message: "Email already exist" })
  }
  else if (phoneCon) {
    return res.json({ success: false, message: "Phone number already exist" })
  } else {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) throw err;
        let user = await userModel.create({
          username: username,
          name: name,
          email: email,
          phone: phone,
          password: hash
        })
        res.json({ success: true, message: "User created successfully", userId: user._id});
      });
    });
  }
})

module.exports = router;
