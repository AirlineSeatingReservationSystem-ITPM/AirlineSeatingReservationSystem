const router = require("express").Router();

let path = require("path");
let Complain = require("../models/complain");

//http://localhost:8085/complain/add
router.route("/add").post((req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const type = req.body.type;
  const description = req.body.description;
  const email = req.body.email;

  const newComplainData = {
    id,
    name,
    type,
    description,
    email,
  };

  const newComplain = new Complain(newComplainData);

  newComplain
    .save()
    .then(() => {
      res.json("Complain Added");
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").get((req, res) => {
  //route for display all

  Complain.find()
    .then((complains) => {
      res.json(complains);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:id").put(async (req, res) => {
  //update data
  let complainID = req.params.id;
  const id = req.body.id;
  const name = req.body.name;
  const type = req.body.type;
  const description = req.body.description;
  const email = req.body.email;

  const updateComplain = { id, name, type, description, email };

  await Complain.findByIdAndUpdate(complainID, updateComplain)
    .then(() => {
      res.status(200).send({ status: "Complain Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
});

router.route("/delete/:id").delete(async (req, res) => {
  //delete data
  let complainID = req.params.id;

  await Complain.findByIdAndDelete(complainID)
    .then(() => {
      res.status(200).send({ status: "Complain has successfully deleted" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with deleting data", error: err.message });
    });
});

router.route("/get/:id").get(async (req, res) => {
  //search data
  let complainID = req.params.id;

  await Complain.findById(complainID)
    .then((complain) => {
      res.status(200).json(complain);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with fetching data", error: err.message });
    });
});

module.exports = router;
