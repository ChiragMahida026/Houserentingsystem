const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  c_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contact: {
    unique: true,
    type: String,
    required: true,
    validate(value) {
      if (value.length !== 10) {
        throw new Error("Mobile Number is invalid!");
      }
    },
  },
  dob: {
    trim: true,
    type: Date,
    required: true,
  },

  address: {
    trim: true,
    type: String,
    require: true,
  },
  city: {
    trim: true,
    type: String,
    require: true,
  },
  state: {
    trim: true,
    uppercase: true,
    type: String,
    require: true,
  },

  Identification_proof_type: {
    trim: true,
    type: String,
    required: true,
  },
  Identification_proof: {
    // data:,
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  usertype: {
    type: String,
    default: "C",
  },
  status: {
    type: String,
    enum: ["A", "P"],
    default: "P",
  },
});

//save in variable
var Cust = mongoose.model("userregister", CustomerSchema);
module.exports = Cust;
