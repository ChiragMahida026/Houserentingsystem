const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const config = require("config");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Profile = require("../../models/cust_reg");

router.get("/", auth, async (req, res) => {
  let profile1 = {};
  // @ts-ignore
  Profile.findOne({ _id: req.id }, (err, profile) => {
    if (err) {
      profile1 = {};
    } else if (profile1 == null) {
      profile1 = {};
    } else {
      profile1 = profile;
    }
  });
  const salt = await bcrypt.genSalt(10);
  // @ts-ignore
  console.log(req.id);
  // @ts-ignore
  const result = await Profile.findOneAndDelete({ _id: req.id });
  if (result) {
    res.send(result);
  } else {
    res.status(400).send("profilenotfound");
  }
});

module.exports = router;