const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({

    TravelClass: {
        type : String,
        required: true
    },
    DepartingAirport:{

        type: String,
        required: true

    },
    DestinationAirport: {

        type: String,
        required: true
    },
    Adults: {

        type: String,
        required: true
    },
    Infants: {

        type: String,
        required: true
    },
    Childrens: {

        type: String,
        required: true
    },
    DepartDate: {

        type: String,
        required: true
    },
    ReturnDate: {

        type: String,
        required: true
    }


})
module.exports = mongoose.model("BookingForm", bookingSchema );