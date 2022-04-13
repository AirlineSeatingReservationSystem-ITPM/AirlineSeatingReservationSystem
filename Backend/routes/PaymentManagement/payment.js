const router = require("express").Router();

let Payment = require("../../models/payment")


//add payment

router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const date = req.body.date;
    const price = req.body.price;

    const newPaymentData = {
        name,
        date,
        price

    }

    const newPayment = new Payment(newPaymentData);

    newPayment.save().then(() => {
        res.json("Payment Added")
    }).catch(err => res.status(400).json('Error: ' + err));
});

 //get payment

router.route("/").get((req,res)=>{

    Payment.find().then((Payment)=>{
         res.json(Payment)
    }).catch((err)=>{
        console.log(err)
    })

})

//update

router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const {name, date, price} = req.body;

    const updatePayment = {
        name,
        date,
        price
    }

    const update = await Payment.findByIdAndUpdate(userId, updatePayment)
    .then(() => {
       res.status(200).send({status: "user updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error:message});
    })

})

//delete

router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;
    await Payment.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })

    
})


router.route("/get/:id").get(async (req ,res) =>{
    let userId = req.params.id;
    const user = await Payment.findById(userId)
    .then(() =>{
        res.status(200).send({status: "User fetched", user: user})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status : "Error with get user", error: err.message});
    })
})


module.exports = router;