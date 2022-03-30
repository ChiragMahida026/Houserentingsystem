const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const config = require("config");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const House = require("../../models/house");

router.get("/", auth, async (req, res) => {
  let house1 = {};
  House.findOne({ roomie_id: req.query.roomie_id }, (err, house) => {
    if (err) {
      house = {};
    } else if (house == null) {
      house = {};
    } else {
      house1 = house;
    }
  });
  const del = await House.findOneAndDelete({ roomie_id: req.query.roomie_id });
  if (del) {
    res.send(del);
  } else {
    res.status(404).send("notfound");
  }
});

module.exports = router;