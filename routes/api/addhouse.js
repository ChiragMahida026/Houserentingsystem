const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const config = require("config");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const House = require("../../models/house");
router.post("/", auth, async (req, res) => {
  // @ts-ignore
  console.log(req.id);
  // @ts-ignore
  let house = new House({
    roomie_id: req.body.roomie_id,
    house_type: req.body.house_type,
    total_roomes: req.body.total_roomes,
    deposit: req.body.deposit,
    housepaper: req.body.housepaper,
    address: req.body.address,
    description: req.body.description,
    price: req.body.price,
    Image1: req.body.Image1,
    Image2: req.body.Image2,
    Image3: req.body.Image3,
    Image4: req.body.Image4,
    // @ts-ignore
    userid: req.id,
  });
  house.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      res.status(200).send({ message: "house added succesfully" });
    }
  });
});

module.exports = router;
