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
    console.log("dhskjdhkajdhakjdh"+req.body);

    var house1;

    House.findOne({ roomie_id: req.body.roomie_id }, (err, house) => {
      if (err) {
        return res.json({ err: "errorkejfwklfjwlf" });
      } else if (house == null) {
        return res.json({ err: "no house avalible" });
      } else {
        house1 = house;
      }
    });
    console.log("House"+house1);

    const request_h = new request_house({
      
      // @ts-ignore
      customer_id: req.id,
      house_id: req.body.house_id,
      Landlord_id: req.body.Landlord_id,
      response: 0,
    });
    console.log("Hellos"+request_h);
    try {
      request_h.save();

    } catch (err) {
      console.error("error");
      res.status(500).send("Server error");
    }
  }
);

router.get("/getuserid",auth, async (req, res) => {
  request_house.find({ customer_id: req.query.customer_id }, (err, house) => {
    if (err) {
      return res.json({ err: err });
    } else if (house == null) {
      return res.json({ err: "no house avalible" });
    } else {
      return res.json({ data: house });
    }
  });
});

router.get("/landlorduserid", auth, async (req, res) => {
  request_house.find({ Landlord_id: req.query.Landlord_id }, (err, house) => {
    if (err) {
      return res.json({ err: err });
    } else if (house == null) {
      return res.json({ err: "no house avalible" });
    } else {
      return res.json({ data: house });
    }
  });
});

router.get("/deleteuserid",auth, async (req, res) => {
  // request_house.findOne({ _id: req.query._id }, (house) => {
  //         return res.json({ data: house });
    
  // });
  const del = await request_house.findOneAndDelete({ _id: req.query._id });
  if (del) {
    res.send(del);
  } else {
    // res.status(404).send("notfound");
  }
});

module.exports = router;