const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
  number: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },
  expiry: {
    type: String,
    required: true,
  },
  cvc: {
    type: String,
    required: true,
  },
});

const Payment = mongoose.model("payment", PaymentSchema);

module.exports = Payment;
