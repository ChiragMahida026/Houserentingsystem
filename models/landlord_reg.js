const mongoose = require("mongoose");

const landlordSchema = new mongoose.Schema({
  name: {
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
  password: {
    type: String,
    required: true,
  },
  usertype: {
    type: String,
    default: "l",
  },
  Identificationtype: {
    trim: true,
    type: String,
    required: true,
  },
  Identification: {
    type: String,
    required: true,
  },
  current_address: {
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
  dob: {
    trim: true,
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["A", "P"],
    default: "P",
  },
});

//save in variable
var landlord = mongoose.model("userregister", landlordSchema);
module.exports = landlord;
