const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RefundRequestsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  passport: {
    type: String,
    required: true,
  },
  reference: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const RefundRequests = mongoose.model("refundRequests", RefundRequestsSchema);

module.exports = RefundRequests;
