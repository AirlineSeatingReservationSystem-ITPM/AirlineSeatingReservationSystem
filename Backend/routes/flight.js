const router = require('express').Router();
 
let path = require("path");
let Flight = require('../models/flight');

 
http://localhost:8085/flight/add
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


router.route("/").get((req , res)=>{ //route for display all
    
    Flight.find().then((flights)=>{
        res.json(flights);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put(async (req , res)=>{  //update data
    let flightID = req.params.id;
    const id = req.body.id;
    const flight = req.body.flight;
    const date = req.body.date;
    const destination = req.body.destination;
    const sheduleddeparturetime = req.body.sheduleddeparturetime;
    const assignplanetype = req.body.assignplanetype;
    const capacity = req.body.capacity;
    const seatsreserved = req.body.seatsreserved;
    const availableclasses = req.body.availableclasses;

    const updateFlight = {id , flight ,  date , destination,sheduleddeparturetime,assignplanetype,capacity,seatsreserved,availableclasses };

    await Flight.findByIdAndUpdate(flightID , updateFlight)
    .then(()=>{
        res.status(200).send({status : "Flight Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/delete/:id").delete(async (req , res)=>{  //delete data
    let flightID = req.params.id;

    await Flight.findByIdAndDelete(flightID)
    .then(()=>{
        res.status(200).send({status : "Flight has successfully deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});

router.route("/get/:id").get(async (req , res)=>{  //search data
    let flightID = req.params.id; 

    await Flight.findById(flightID)
    .then((flight)=>{
        res.status(200).json(flight);

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with fetching data" , error : err.message});
    });
});

module.exports = router;