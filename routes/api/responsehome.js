const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator/check");
const auth = require("../../middleware/auth");

//Customer Registration Model
const request_house = require("../../models/requet");
const House = require("../../models/house");

//@route POST api/customer_registration
//@desc Register Customer
//@access Public

router.patch(
  "/",
  auth,

  //Using async
  async (req, res) => {
    const errors = validationResult(req);

    var rhouse1;

    request_house.findOne(
      { customer_id: req.body.customer_id, house_id: req.body.house_id },
      (err, rhouse) => {
        if (err) {
          return res.json({ err: err });
        } else if (rhouse == null) {
          return res.json({ err: "no house avalible" });
        } else {
          rhouse1 = rhouse;
        }
      }
    );
    console.log(rhouse1);

    request_house.findOneAndUpdate(
      { customer_id: req.body.customer_id, house_id: req.body.house_id },
      {
        $set: {
          response: req.body.response,
        },
      },
      { new: true },
      (err, house) => {
        if (err) {
          return res.json({ err: err });
        } else {
          return res.json({ data: house });
        }
      }
    );
  }
);

module.exports = router;