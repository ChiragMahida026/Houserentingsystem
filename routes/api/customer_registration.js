const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator/check");

//Customer Registration Model
const cust_reg = require("../../models/cust_reg");

//@route POST api/customer_registration
//@desc Register Customer
//@access Public

router.post(
  "/",
  [
    check("c_name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("contact", "Enter Valid Number").matches(RegExp("^[6-9]\\d{9}$")),
    check("dob", "Enter Date Of Birth").not().isEmpty(),
    check("address", "Current Address is Required").not().isEmpty(),
    check("city", "select City").not().isEmpty(),
    check("state", "selct state").not().isEmpty(),
    check("Identification_proof_type").not().isEmpty(),
    check("Identification_proof").not().isEmpty(),
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
      c_name,
      email,
      contact,
      dob,
      address,
      city,
      state,
      Identification_proof_type,
      Identification_proof,
      password,
    } = req.body;

    try {
      //See if User exits
      let cust = await cust_reg.findOne({ email });
      let con = await cust_reg.findOne({ contact });

      if (cust) {
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
      cust = new cust_reg({
        c_name,
        email,
        contact,
        dob,
        address,
        city,
        state,
        Identification_proof_type,
        Identification_proof,
        avatar,
        password,
      });

      //Encrypt Password using bcrypt
      const salt = await bcrypt.genSalt(10); //more you have more you secure
      cust.password = await bcrypt.hash(password, salt);
      await cust.save();

      //Return Jsonwebtoken
      const payload = {
        user: {
          id: cust.id,
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

      // res.send("Customer Registration route");//to print value
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
