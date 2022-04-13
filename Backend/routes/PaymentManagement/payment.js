const router = require("express").Router();

let Payment = require("../../../Backend/models/Payment")


//add payment

router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const date = req.body.date;
    const price = req.body.price;

    const newPayment = new Payment({
        name,
        date,
        price

    })

    newPayment.save().then(()=>{
          req.json("Payment Added")
    }).catch((err)=>{
        console.log(err);
    })
    
})

 //get payment

router.route("/").get((req,res)=>{

    Payment.find().then((Payment)=>{
         res.json(Payment)
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/update/:id").put()

module.exports = router;