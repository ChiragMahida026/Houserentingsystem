const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator/check");

//landlord Registration Model
const landlord_reg = require("../../models/landlord_reg");

//@route POST api/landlord_registration
//@desc Register landlord
//@access Public

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("contact", "Enter Valid Number").matches(RegExp("^[6-9]\\d{9}$")),
    check("dob", "Enter Date Of Birth").not().isEmpty(),
    check("Current_address", "Current Address is Required").not().isEmpty(),
    check("city", "select City").not().isEmpty(),
    check("state", "selct state").not().isEmpty(),
    check("Identificationtype").not().isEmpty(),
    check("Identification").not().isEmpty(),
    check("usertype").not().isEmpty(),
    check(
      "password",
      "Please enter a password with 6 or more character"
    ).isLength({
      min: 6,
    }),
  ],
  //Using async
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
      email,
      contact,
      dob,
      current_address,
      city,
      state,
      Identificationtype,
      Identification,
      usertype,
      password,
    } = req.body;

    try {
      //See if User exits
      let landlord = await landlord_reg.findOne({ email });
      let con = await landlord_reg.findOne({ contact });

      if (landlord) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User alraedy exists" }] });
      }
      if (con) {
        console.error(con);
        return res
          .status(400)
          .json({ errors: [{ msg: "contact alraedy exists" }] });
      }

      //get Users gravatar
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm", //404
      });
      
      landlord = new landlord_reg({
        name,
        email,
        contact,
        dob,
        current_address,
        city,
        state,
        Identificationtype,
        Identification,
        usertype,
        password,
      });

      //Encrypt Password using bcrypt
      const salt = await bcrypt.genSalt(10); //more you have more you secure
      landlord.password = await bcrypt.hash(password, salt);
      await landlord.save();

      //Return Jsonwebtoken
      const payload = {
        user: {
          id: landlord.id,
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

      // res.send("landlord Registration route");//to print value
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
