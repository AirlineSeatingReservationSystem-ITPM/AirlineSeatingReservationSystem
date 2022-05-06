const router = require("express").Router();

let path = require("path");
let Meal = require("../models/meal");

//http://localhost:8085/meals/add
router.route("/add").post((req, res) => {
  const mealid = req.body.mealid;
  const mealname = req.body.mealname;
  const mealtype = req.body.mealtype;
  const mealportion = req.body.mealportion;

  const newMealData = {
    mealid,
    mealname,
    mealtype,
    mealportion,
  };

  const newMeal = new Meal(newMealData);

  newMeal
    .save()
    .then(() => {
      res.json("Meal Added");
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").get((req, res) => {
  //route for display all meals

  Meal.find()
    .then((meals) => {
      res.json(meals);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/get/:id").get(async (req, res) => {
  //search data
  let mealID = req.params.id;

  await Meal.findById(mealID)
    .then((meals) => {
      res.status(200).json(meals);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with fetching data", error: err.message });
    });
});

router.route("/update/:id").put(async (req, res) => {
  //update data
  let id = req.params.id;
  let mealid = req.params.mealid;
  const mealname = req.body.mealname;
  const mealtype = req.body.mealtype;
  const mealportion = req.body.mealportion;

  const updateMeal = { mealid, mealname, mealtype, mealportion };

  await Meal.findByIdAndUpdate(id, updateMeal)
    .then(() => {
      res.status(200).send({ status: "Meal Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
});

// router.route("/delete/:id").delete(async (req , res)=>{  //delete data
//     let id = req.params._id;

//     await Meal.findByIdAndDelete(id)
//     .then(()=>{
//         res.status(200).send({status : "Meal has successfully deleted"});

//     }).catch((err)=>{
//         console.log(err);
//         res.status(500).send({status : "Error with deleting data" , error : err.message});
//     });
// });

router.route("/delete/:id").delete(async (req, res) => {
  //delete data
  let mealID = req.params.id;

  await Meal.findByIdAndDelete(mealID)
    .then(() => {
      res.status(200).send({ status: "Meal has successfully deleted" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with deleting data", error: err.message });
    });
});

module.exports = router;
