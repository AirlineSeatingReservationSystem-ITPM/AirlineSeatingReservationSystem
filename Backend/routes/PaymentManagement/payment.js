const router = require("express").Router();

let Payment = require("../../../Backend/models/Payment.js")

router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const date = req.body.date;
    const price = req.body.price;

})