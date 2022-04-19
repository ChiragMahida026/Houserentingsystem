const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const jwt = require("jsonwebtoken");

router.get("/login", async (req, res) => {
  res.json(req.cookies);
});

router.get("/", async (req, res) => {
  res.clearCookie("myData");
  res.clearCookie("token");

  res.send("loggesd out");

  console.log("loggesd out");
});

module.exports = router;
