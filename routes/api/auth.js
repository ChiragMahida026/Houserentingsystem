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
    res.json(user);
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
  [
    check("email", "Please Include a Valid Email").isEmail(),
    check("password", "Password is Required").exists(),
  ],

  //Using async
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      //See if User exits
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      //match password
      const isMatch = await bcrypt.compare(password, user.password); //(plainpassword,encrypted password) compareition
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      //Return Jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token }); //to get id
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
