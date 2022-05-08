const router = require("express").Router();

let Payment = require("../../models/payment");

//add payment

router.route("/add").post((req, res) => {
  const number = req.body.number;
  const name = req.body.name;
  const expiry = req.body.expiry;
  const cvc = req.body.cvc;

  const newPaymentData = {
    number,
    name,
    expiry,
    cvc,
  };

  const newPayment = new Payment(newPaymentData);

  newPayment
    .save()
    .then(() => {
      res.json("Payment Added");
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//get payment

//  router.route("/").get((req, res) => {
//    Payment.find()
//      .then((Payment) => {
//        res.json(Payment);
//      })
//      .catch((err) => {
//        console.log(err);
//      });
//  });

//old code

router.get("/", (_req, res) => {
  Payment.find().exec((err, Payment) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingPayment: Payment,
    });
  });
});

//get
router.route("/get/:id").get(async (req, res) => {
  //search data
  let paymentID = req.params.id;

  await Payment.findById(paymentID)
    .then((payment) => {
      res.status(200).json(payment);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with fetching data", error: err.message });
    });
});

//update

// router.put("/update/:id", (req, res) => {
//   Payment.findByIdAndUpdate(
//     req.params.id,
//     {
//       $set: req.body,
//     },
//     (err, post) => {
//       if (err) {
//         return res.status(400).json({ error: err });
//       }

//       return res.status(200).json({
//         success: "Updated Succesfully",
//       });
//     }
//   );
// });

router.route("/update/:id").put(async (req, res) => {
  //update data
  let paymentID = req.params.id;
  const number = req.body.number;
  const name = req.body.name;
  const expiry = req.body.expiry;
  const cvc = req.body.cvc;

  const updatePayment = { number, name, expiry, cvc };

  await Payment.findByIdAndUpdate(paymentID, updatePayment)
    .then(() => {
      res.status(200).send({ status: "Payment Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
});

//delete

router.delete("/delete/:id", (req, res) => {
  Payment.findByIdAndRemove(req.params.id).exec((err, deletedPayment) => {
    if (err)
      return res.status(400).json({
        message: "Delete unsuccesful",
        err,
      });

    return res.json({
      message: "Delete successfull",
      deletedPayment,
    });
  });
});

router.get("/Payment/:id", (req, res) => {
  let PaymentId = req.params.id;

  Payment.findById(PaymentId, (err, Payment) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }

    return res.status(200).json({
      success: true,
      Payment,
    });
  });
});

module.exports = router;
