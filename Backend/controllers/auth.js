//JWT authentication goes here
const User= require("../models/user");
const userStaff = require("../models/userStaff");
//const Staff= require("../models/staff");
//const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");
const sendFlightEmail = require("../utils/sendFlightEmail");

const crypto = require("crypto");
const flightStaff = require("../models/flightStaff");

exports.register = async (req, res, next) =>{
    const { username , email , password} = req.body;

    try {
        const user = await User.create({
            username , email , password
        })
        sendToken(user , 200 , res);
    } catch (error) {
        next(error);
    }
}

exports.login = async (req , res , next) =>{
    const {email , password} = req.body;
 
    if(!email || !password){ //backend validation
        return next(new ErrorResponse("Please provide an email and password" , 400)); //throws a new error
    }                                                                           //400 Bad Request
 
    try {
     
         const user = await User.findOne({email}).select("+password");
 
         if(!user){ //true
             return res.status(500).json({success:false , error:"User does not exists. Please create an account"})
         }
 
         const isMatch = await user.matchPasswords(password); //matching the passwords from the received from request and from the db
         
         if(!isMatch){
            return res.status(500).json({success:false , error:"Invalid Credentials"})
         }
 
         sendToken(user , 200 , res);
 
    } catch (error) {
         res.status(500).json({ // 500 internal server error
             success:false,
             error:error.message
     })       
    }
 }

 exports.forgotPassword = async (req , res , next) =>{
    const {email} = req.body;

    try {
        const user = await User.findOne({email});

        if(!user){
            return res.status(404).json({success:true , error:"Email couldn't be sent"})
        }

        const resetToken = user.getResetPasswordToken();
        
        await user.save();

        const resetURL = `http://localhost:3000/passwordreset/${resetToken}`; //this is a frontend route

        const message = `
        <h1>You have requested a password reset</h1>
        <p>Please go to this URL to reset password</p>
        <a href=${resetURL} clicktracking=off>${resetURL}</a>
         `
        try {
            await sendEmail({
                to : email,
                subject : "Password Reset Request",
                text : message
            })

            res.status(200).json({ success : true , achieve : "Email Sent"});

        } catch (error) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;

            await user.save();

            return res.status(404).json({success:true , error:"Email couldn't be sent"})

        }
    } catch (error) {
        next(error);
    }
}

exports.resetpassword = async (req , res , next) =>{
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex");

    try {
        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire: {$gt : Date.now()}
        })

        if(!user){
            return next(new ErrorResponse("Invalid Reset Token") , 400)
        }

        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        res.status(200).json({success : true , data : "Password reset success"});

    } catch (error) {
        next(error);
    }
}

const sendToken = (user , statusCode , res)=>{ //JWT get
    const token = user.getSignedToken();
    const username = user.username
    res.status(200).json({success:true , token, username});
}

exports.displayUsers = async(req, res) => {
    await User.find().then((users)=> res.json(users)).catch(err => res.status(500).json({success:true, err}))
}

exports.editUser = async(req, res) => {
    const {id} = req.params;
    const { username , password} = req.body;
    await User.findByIdAndUpdate(id , {username , password}).then(()=> res.json({success:true , message:"User Updated Successfully"})).catch(err => res.status(500).json({success:true, err}))
}

exports.getUserById = async (req , res) => {
    const {id} = req.params;
    await User.findById(id).then((user) => res.status(200).json(user)).catch(err => res.status(500).json({success:false , err}))
}

exports.deleteUserById = async (req , res) => {
    const {id} = req.params;
    await User.findByIdAndDelete(id).then(() => res.status(200).json({success:true , message:"User Deleted Successfully"})).catch(err => res.status(500).json({success:false , err}))
}

//-------------------------------------------Staff Section------------------------------------------------

exports.registerStaffUserM = async (req , res , next) =>{  
   
    const {email , password} = req.body; //destructure method

    try {
        const staff = await userStaff.create({
            email , password //this.password filed of user.js in models
        })
        sendStaffToken(staff , 200 , res);

    } catch (error) {
       next(error);
    }
}

exports.loginStaffUserM = async (req , res , next) =>{
    const {email , password} = req.body;
 
    if(!email || !password){ //backend validation
        return next(new ErrorResponse("Please provide an email and password" , 400)); //throws a new error
    }                                                                           //400 Bad Request
 
    try {
     
         const staff = await userStaff.findOne({email}).select("+password");
 
         if(!staff){ //true
             return next(new ErrorResponse("Invalid Credentials" , 401));
         }
 
         const isMatch = await staff.matchStaffPasswords(password); //matching the passwords from the received from request and from the db
         
         if(!isMatch){
             return next(new ErrorResponse("Invalid Credentials" , 401)); //401 for unauthorized
         }
 
         sendStaffToken(staff , 200 , res);
 
    } catch (error) {
         res.status(500).json({ // 500 internal server error
             success:false,
             error:error.message
     })       
    }
 }

 exports.registerStaffFlightM = async (req , res , next) =>{  
   
    const {email , password} = req.body; //destructure method

    try {
        const staff = await flightStaff.create({
            email , password //this.password filed of user.js in models
        })
        sendStaffToken(staff , 200 , res);

    } catch (error) {
       next(error);
    }
}

exports.loginStaffFlightM = async (req , res , next) =>{
    const {email , password} = req.body;
 
    if(!email || !password){ //backend validation
        return next(new ErrorResponse("Please provide an email and password" , 400)); //throws a new error
    }                                                                           //400 Bad Request
 
    try {
     
         const staff = await flightStaff.findOne({email}).select("+password");
 
         if(!staff){ //true
             return next(new ErrorResponse("Invalid Credentials" , 401));
         }
 
         const isMatch = await staff.matchStaffPasswords(password); //matching the passwords from the received from request and from the db
         
         if(!isMatch){
             return next(new ErrorResponse("Invalid Credentials" , 401)); //401 for unauthorized
         }
 
         sendStaffToken(staff , 200 , res);
 
    } catch (error) {
         res.status(500).json({ // 500 internal server error
             success:false,
             error:error.message
     })       
    }
 }
 const sendStaffToken = (user , statusCode , res)=>{ //JWT get
    const token = user.getStaffSignedToken();
    res.status(200).json({success:true , token});
}



//---------------------------------------Email Sending Section------------------------------------------

//Flight Management
exports.sendFlightEmail = async (req , res , next) =>{
    const {email , description} = req.body;

    try {

        const message = `
        <h1>${description}</h1>
        <p>If any concerns , please contact : 0774458521 </p>
         `
        try {
            await sendFlightEmail({
                to : email,
                subject : "About Complain",
                text : message
            })

            res.status(200).json({ success : true , data : "Email Sent"});

        } catch (error) {
            res.status(500).json({ success : false , data : "Email could not be sent"});
            return next(new ErrorResponse("Email could not be sent") , 500);

        }
    } catch (error) {
        next(error);
    }
} 

