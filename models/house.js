const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema({
  roomie_id: {
    type: Number,
    required: true,
  },
  house_type: {
    type: String,
    required: true,
  },

  total_roomes: {
    type: Number,
    required: true,
  },
  deposit: {
    type: Number,
    required: true,
  },
  housepaper: {
    type: String,
    required: true,
  },

  address: {
    trim: true,
    type: String,
    require: true,
  },
  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  Image1: {
    type: String,
    required: true,
  },
  Image2: {
    type: String,
    required: true,
  },
  Image3: {
    type: String,
    required: true,
  },
  Image4: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
});

//save in variable
var house = mongoose.model("house", houseSchema);
module.exports = house;