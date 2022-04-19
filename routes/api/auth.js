const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const config = require("config");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../../models/cust_reg");

//@route GET api/auth
//@desc Test route
//@access Public

//using middleware auth,middleware validating token for us
router.get("/", auth, async (req, res) => {
  try {
    // @ts-ignore
    const user = await User.findById(req.user.id).select("-password");
    console.log(user);
    res.json({ user });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

//@route Post api/auth
//@desc Authenticate user & get token
//@access Public

router.post(
  "/",

  //Using async
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let login_user = new User({
      email: req.body.email,
      password: req.body.password,
      usertype: req.body.usertype,
    });

    try {
      //See if User exits
      let user = await User.findOne({ email: req.body.email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      // if (user.usertype == "L") {
      // } else {
      // }

      // if (req.body.usertype != user.usertype) {
      //   return res
      //     .status(400)
      //     .json({ errors: [{ msg: "Invalid Credentials" }] });
      // }

      //match password
      const isMatch = await bcrypt.compare(req.body.password, user.password); //(plainpassword,encrypted password) compareition
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      //Return Jsonwebtoken
      const payload = {
        login_user: {
          id: user._id,
          usertype: user.usertype,
        },
      };
      console.log(user.id);
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.cookie("myData", user.usertype);
          res.cookie("token", token);
          res.json({ token, user }); //to get id
        }
      );

      // res.send("User route");//to print value
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
