const User = require("../../models/cust_reg");
const Token = require("../../models/token");
const sendEmail = require("./sendemail");
const crypto = require("crypto");
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const schema = Joi.object({ email: Joi.string().email().required() });
    const { error } = schema.validate(req.body);
    // if (error) {
    //   console.log("1");
    //   res.status(500).json(error.details[0].message);
    // }
    const user = await User.findOne({ email: req.body.email });
    // if (!user) {
    //   console.log("2");
    //   res.status(400).json("user with given email doesn't exist");
    // }
    let token = await Token.findOne({ userId: user._id });
    if (!token) {
      console.log("3");
      token = await new Token({
        userId: user._id,
        token: crypto.randomBytes(32).toString("hex"),
      }).save();
    }

    const link = `http://localhost:3000/changepassword/?id=${user._id}&name=${token.token}`;
     await sendEmail(user.email, "Password reset", link);
    
    console.log(link);
  
    res.send("password reset link sent to your email account");
  } catch (error) {
    res.send("An error occured");
    console.log(error);
  }
});
router.post("/:userId/:token", async (req, res) => {
  try {
    const schema = Joi.object({ password: Joi.string().required() });
    const { error } = schema.validate(req.body);
    if (error) {
      console.log("4");
      // res.status(500).json(error.details[0].message);
    }
    const user = await User.findById(req.params.userId);
    // if (!user) {
    //   console.log("5");
    //   res.status(400).json("invalid link or expired");
    // }
    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    // if (!token) {
    //   console.log("6");
    //   res.status(400).json("Invalid link or expired");
    // }
    const salt = await bcrypt.genSalt(10);
    console.log(req.body.password)
    user.password = await bcrypt.hash(req.body.password, salt);
    await user.save();
    await token.delete();

    res.send("password reset sucessfully.");
  } catch (error) {
    res.send("An error occured");
    console.log(error);
  }
});

module.exports = router;