const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const config = require("config");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const House = require("../../models/house");
router.get("/all", auth, async (req, res) => {
  House.find((err, house) => {
    if (err) {
      return res.json({ err: err });
    } else if (house == null) {
      return res.json({ err: "no house avalible" });
    } else {
      return res.json({ data: house });
    }
  });
});

router.get("/", auth, async (req, res) => {
  House.findOne({ roomie_id: req.query.roomie_id }, (err, house) => {
    if (err) {
      return res.json({ err: err });
    } else if (house == null) {
      return res.json({ err: "no house avalible" });
    } else {
      return res.json({ data: house });
    }
  });
});

router.get("/getuserid", auth, async (req, res) => {
  House.find({ userid: req.query.userid }, (err, house) => {
    if (err) {
      return res.json({ err: err });
    } else if (house == null) {
      return res.json({ err: "no house avalible" });
    } else {
      return res.json({ data: house });
    }
  });
});

router.get("/allvisitor", async (req, res) => {
  House.find((err, house) => {
    if (err) {
      return res.json({ err: err });
    } else if (house == null) {
      return res.json({ err: "no house avalible" });
    } else {
      return res.json({ data: house });
    }
  });
});

module.exports = router;
