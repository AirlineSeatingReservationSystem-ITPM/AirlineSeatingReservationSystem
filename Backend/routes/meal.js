const router = require('express').Router();
 
let path = require("path");
let Meal = require('../models/meal');


router.route("/").get((req , res)=>{ //route for display all meals
    
    Meal.find().then((meals)=>{
        res.json(meals);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:mealid").put(async (req , res)=>{  //update data
    let mealid = req.params.mealid;
    const mealname = req.body.mealname;
    const mealtype = req.body.mealtype;
    const mealportion = req.body.mealportion;
    

    const updateMeal = {mealid, mealname , mealtype, mealportion };

    await User.findByIdAndUpdate(mealid , updateMeal)
    .then(()=>{
        res.status(200).send({status : "Meal Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/delete/:mealid").delete(async (req , res)=>{  //delete data
    let mealid = req.params.mealid;

    await User.findByIdAndDelete(mealid)
    .then(()=>{
        res.status(200).send({status : "Meal has successfully deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});

module.exports = router;