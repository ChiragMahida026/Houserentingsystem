const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const config = require("config");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const House = require("../../models/add_house");
router.post("/", auth, async (req, res) => {
  // @ts-ignore
  let house = new House({});
});

module.exports = router;
