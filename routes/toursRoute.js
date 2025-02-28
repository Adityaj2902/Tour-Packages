const express= require('express');
const fs = require('fs');
const tourController=require('./../controller/tourController');
// const {getAllToursById,createNewTour}= like this only
//  I USE THE SAME LINE ABOVE BY USING DESTRUCTURING LIKE THIS 

const router=express.Router(); 

// router.param('id',tourController.checkID);

// CHALLENGE 1

// Create a check Body Middleware 
// Check if body contains the name and price property
// if not , send back 400 (bad Requests)
// Add it to PostHandler Stack

router
// app 
.route('/')
.get(tourController.getAllTours)
.post(tourController.createNewTour);


router
// app 
.route('/:id')
.get(tourController.getTourById)
.patch(tourController.updateTour)
// .delete(tourController.deleteTour);


module.exports=router;