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
    default:"C"
  },
  status: {
    type: String,
  },
});

//save in variable 
var Cust = mongoose.model("customer_reg", CustomerSchema);
module.exports = Cust;