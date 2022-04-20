const router = require('express').Router();
 
let path = require("path");
let User = require('../models/user');

 /*
http://localhost:8085/user/add
router.route('/add').post( (req, res) => {
    const id = req.body.id;
    const flight =  req.body.flight;
    const date = req.body.date;
    const  destination = req.body.destination;
    const sheduleddeparturetime = req.body.sheduleddeparturetime;
    const assignplanetype = req.body.assignplanetype;
    const capacity = Number(req.body.capacity);
    const seatsreserved =Number(req.body.seatsreserved);
    const availableclasses = req.body.availableclasses;

    const newFlightData = {
        id,
        flight,
        date,
        destination,
        sheduleddeparturetime,
        assignplanetype,
        capacity,
        seatsreserved,
        availableclasses
    }

    const newFlight = new Flight(newFlightData);

    newFlight.save().then(() => {
        res.json("Flight Added")
    }).catch(err => res.status(400).json('Error: ' + err));
});
*/

router.route("/").get((req , res)=>{ //route for display all
    
    User.find().then((users)=>{
        res.json(users);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put(async (req , res)=>{  //update data
    let userID = req.params.id;
    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    

    const updateUser = {name, username , email  };

    await User.findByIdAndUpdate(userID , updateUser)
    .then(()=>{
        res.status(200).send({status : "User Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/delete/:id").delete(async (req , res)=>{  //delete data
    let userID = req.params.id;

    await User.findByIdAndDelete(userID)
    .then(()=>{
        res.status(200).send({status : "User has successfully deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});

router.route("/get/:id").get(async (req , res)=>{  //search data
    let userID = req.params.id; 

    await User.findById(userID)
    .then((user)=>{
        res.status(200).json(user);

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with fetching data" , error : err.message});
    });
});

module.exports = router;