const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const flightSchema = new Schema({
  id: {
    type: String,
    required: true,
    trim: true,
  },

  flight: {
    type: String,
    required: true,
    trim: true,
  },

  date: {
    type: String,
    required: true,
    trim: true,
  },

  destination: {
    type: String,
    required: true,
    trim: true,
  },

  sheduleddeparturetime: {
    type: String,
    required: true,
    trim: true,
  },
  assignplanetype: {
    type: String,
    required: true,
    trim: true,
  },
  capacity: {
    type: Number,
    required: true,
    trim: true,
  },
  seatsreserved: {
    type: Number,
    required: true,
    trim: true,
  },
  availableclasses: {
    type: String,
    required: true,
    trim: true,
  },
});

const Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;
