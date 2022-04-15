const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const config = require("config");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Profile = require("../../models/cust_reg");

router.patch("/", auth, async (req, res) => {
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
  Profile.findOneAndUpdate(
    // @ts-ignore
    { _id: req.id },
    {
      $set: {
        c_name: req.body.c_name ? req.body.c_name : profile1.c_name,
        email: req.body.email ? req.body.email : profile1.email,
        contact: req.body.contact ? req.body.contact : profile1.contact,
        dob: req.body.dob ? req.body.dob : profile1.dob,
        address: req.body.address ? req.body.address : profile1.address,
        city: req.body.DDCity ? req.body.DDCity : profile1.city,
        state: req.body.DDState ? req.body.DDState : profile1.state,
        Identification_proof_type: req.body.Identification_Proof_Type
          ? req.body.Identification_Proof_Type
          : profile1.Identification_Proof_Type,
        Identification_proof: req.body.Identification_Proof
          ? req.body.Identification_Proof
          : profile1.Identification_Proof,
        password: req.body.password
          ? await bcrypt.hash(req.body.password, salt)
          : profile1.password,
      },
    },
    { new: true },
    (err, profile) => {
      if (err) {
        return res.json({ err: err });
      } else {
        return res.json({ data: profile });
      }
    }
  );
});

module.exports = router;
