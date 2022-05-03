const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({
  customer_id: {
    type: String,
    required: true,
  },
  house_id: {
    type: String,
    required: true,
  },

  Landlord_id: {
    type: String,
    required: true,
  },
  response: {
    type: Number,
    required: true,
    default: 0,
  },
});

//save in variable
var requestsend = mongoose.model("requestsend", RequestSchema);
module.exports = requestsend;
