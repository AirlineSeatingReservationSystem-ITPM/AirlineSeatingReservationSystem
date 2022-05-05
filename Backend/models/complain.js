const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const complainSchema = new Schema({
    id: {
        type: String,
        required: true,
        trim: true
    }, 

    name: {
        type: String,
        required: true,
        trim: true
    },

     type: {
        type: String,
        required: true,
        trim: true
    }, 
    
    description: {
        type: String,
        required: true,
        trim:true
    },

    email: {
        type: String,
        required: true,
        trim: true
    },
     
});

const Complain = mongoose.model('Complain', complainSchema);

module.exports = Complain;