const router = require("express").Router();

let RefundRequests = require("../../models/refundRequests");

//add RefundRequests

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const passport = req.body.passport;
  const reference = req.body.reference;
  const email = req.body.email;
  const phone = req.body.phone;
  const description= req.body.description;

  const newRefundRequestsData = {
    name,
    passport,
    reference,
    email,
    phone,
    description,
  };

  const newRefundRequests = new RefundRequests(newRefundRequestsData);

  newRefundRequests
    .save()
    .then(() => {
      res.json("RefundRequests Added");
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// router.get("/", (_req, res) => {
//     RefundRequests.find().exec((err, RefundRequests) => {
//       if (err) {
//         return res.status(400).json({
//           error: err,
//         });
//       }
//       return res.status(200).json({
//         success: true,
//         existingRefundRequests: RefundRequests,
//       });
//     });
//   });
router.route("/").get((req , res)=>{ //route for display all
    
  RefundRequests.find().then((refundRequests)=>{
      res.json(refundRequests);
  }).catch((err)=>{
      console.log(err);
  });

});

  //delete

router.delete("/delete/:id", (req, res) => {
    RefundRequests.findByIdAndRemove(req.params.id).exec((err, deletedRefundRequests) => {
      if (err)
        return res.status(400).json({
          message: "Delete unsuccesful",
          err,
        });
  
      return res.json({
        message: "Delete successfull",
        deletedRefundRequests,
      });
    });
  });
  
  router.get("/RefundRequests/:id", (req, res) => {
    let RefundRequestsId = req.params.id;
  
    RefundRequests.findById(RefundRequestsId, (err, RefundRequests) => {
      if (err) {
        return res.status(400).json({ success: false, err });
      }
  
      return res.status(200).json({
        success: true,
        RefundRequests,
      });
    });
  });
  
  module.exports = router;