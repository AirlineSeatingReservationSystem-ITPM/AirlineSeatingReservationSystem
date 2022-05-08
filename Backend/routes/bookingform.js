const express = require ('express');
const bookingform = require('../models/bookingform');

const router = express.Router();

//Add Bookings

router.post('/add',(req,res)=>{

    let newBooking = new bookingform(req.body);

    newBooking.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Booking Added Successfully "
        })
    });

});

// Get added bookings
router.get('/',(req,res)=> {
    bookingform.find().exec((err, bookingform) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingBookings:bookingform
        });
    });
});

// Retrieve a Specific booking

router.get("/:id", (req,res) =>{

    let bookingId = req.params.id;
    bookingform.findById(bookingId, (err, bookingform)=> {
        if (err){
            return res.status(400).json({success:false, err});

        }
        return res.status(200).json({
            success:true,
            bookingform

        })
    });
});

//Update booking

router.put('/update/:id' ,(req,res) => {
    bookingform.findByIdAndUpdate(

        req.params.id,
        {
            $set:req.body
        },
        (err,bookingform)=> {
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});

// Delete booking
router.delete('/delete/:id',(req,res)=> {
    bookingform.findByIdAndRemove(req.params.id).exec((err,deletedBooking)=>{
        if(err) return res.status(400).json({
            message:"Deleted Unsuccessful", err
        });

        return res.json({
            message:"Deleted Succesfully", deletedBooking
        });
    });
});



module.exports = router;






0
