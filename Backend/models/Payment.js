const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PaymentSchema = new Schema({

    name :{
        type : String,
        required : true
    },

    date:{
        type: String,
        required: true
    },
    price :{
        type: String,
        required: true
    }

})

const Payment = mongoose.model("Payment", PaymentSchema);

module.exports = Payment;