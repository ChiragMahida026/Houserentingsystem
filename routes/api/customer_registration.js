const express = require("express");
const router = express.Router();

//@route POST api/customer_registration
//@desc Test route
//@access Private

router.get("/", (req, res) => res.send("Customer Registration"));

module.exports = router;
