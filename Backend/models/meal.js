const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
//const Joi = require("joi");
//const passwordComplexity = require("joi-password-complexity");

const MealSchema = new Schema({
    mealid :{
        type:String,
        required : [true, " meal id is required"]
    },

    mealname:{
        type:String,
        required:[true, "meal name is required"],
        
    },

    mealtype:{
        type:String,
        required:[true, "meal type is required"],
    },

    mealportion :{
        type:String,
        required : [true, "meal portion is required"]
    }
  
})

const Meal = mongoose.model("Meal" , MealSchema)
module.exports = Meal;
