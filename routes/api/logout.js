const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const jwt = require("jsonwebtoken");

router.get("/", auth, async (req, res) => {
  try {
    // @ts-ignore
    console.log(req.id);
    res.clearCookie("jwt");
    console.log("Logout success ");
    // @ts-ignore
    await req.id.save();
    // res.render("/login");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
