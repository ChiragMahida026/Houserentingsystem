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

router.post(
  "/",
  auth,

  //Using async
  async (req, res) => {
    const errors = validationResult(req);
    console.log(req.body);

    var house1;

    House.findOne({ roomie_id: req.body.house_id }, (err, house) => {
      if (err) {
        return res.json({ err: err });
      } else if (house == null) {
        return res.json({ err: "no house avalible" });
      } else {
        house1 = house;
      }
    });
    console.log(house1);

    let request_h = new request_house({
      // @ts-ignore
      customer_id: req.id,
      house_id: req.body.house_id,
      Landlord_id: req.body.Landlord_id,
      response: 0,
    });
    console.log(request_h);
    try {
      request_h.save((err, reqs) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send({ message: "request added" });
        }
      });

      // res.send("Customer Registration route");//to print value
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;