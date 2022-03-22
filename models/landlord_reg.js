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
  usertype:{
    type: String,
    default: "l",
  },
  identificationtype:{
    trim: true,
    type: String,
    required: true,
  },
  identification:{
    type: String,
    required: true,
  },
  current_address: {
    trim: true,
    type: String,
    require: true,
  },
  dob: {
    trim: true,
    type: Date,
    required: true,
  },
});

  //save in variable
var landlord = mongoose.model("landlord_reg", landlordSchema);
module.exports = landlord;