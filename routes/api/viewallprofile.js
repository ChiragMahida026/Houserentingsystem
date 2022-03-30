const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const config = require("config");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Profile = require("../../models/cust_reg");

router.get("/", auth, async (req, res) => {
  // @ts-ignore
  Profile.find((err, profile) => {
    if (err) {
      return res.json({ err: err });
    } else if (profile == null) {
      return res.json({ err: "no profile avalible" });
    } else {
      return res.json({ data: profile });
    }
  });
});

module.exports = router;