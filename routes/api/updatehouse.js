const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const config = require("config");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const House = require("../../models/house");

router.patch("/", auth, async (req, res) => {
  let house1 = {};
  House.findOne({ roomie_id: req.body.roomie_id }, (err, house) => {
    if (err) {
      house = {};
    } else if (house == null) {
      house = {};
    } else {
      house1 = house;
    }
  });
  House.findOneAndUpdate(
    { roomie_id: req.query.roomie_id },
    {
      $set: {
        house_type: req.body.house_type
          ? req.body.house_type
          : house1.house_type,
        total_roomes: req.body.total_roomes
          ? req.body.total_roomes
          : house1.total_roomes,
        deposit: req.body.deposit ? req.body.deposit : house1.deposit,
        housepaper: req.body.housepaper
          ? req.body.housepaper
          : house1.housepaper,
        address: req.body.address ? req.body.address : house1.address,
        description: req.body.description
          ? req.body.description
          : house1.description,
        price: req.body.price ? req.body.price : house1.price,
        Image1: req.body.Image1 ? req.body.Image1 : house1.Image1,
        Image2: req.body.Image2 ? req.body.Image2 : house1.Image2,
        Image3: req.body.Image3 ? req.body.Image3 : house1.Image3,
        Image4: req.body.Image4 ? req.body.Image4 : house1.Image4,
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
});

module.exports = router;