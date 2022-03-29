const mongoose = require("mongoose");

const addhouseSchema = new mongoose.Schema({
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
    type: String,
    required: true,
  },
  Image1: {
    type: String,
  },
  Image2: {
    type: String,
  },
  Image3: {
    type: String,
  },
  Image4: {
    type: String,
  },
});

//save in variable
var addhouse = mongoose.model("add_house", addhouseSchema);
module.exports = addhouse;
