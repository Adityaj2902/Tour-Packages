const express= require('express');
const userController=require('./../controller/userController');




const router=express.Router();

// IMPLEMENTING THE USER ROUTES 
router
// .route('/api/v1/users')
.route('/')
.get(userController.getAllUsers)
.post(userController.createdUser);


router
.route('/:id')
.get(userController.getAllUsers)
.patch(userController.createdUser)
.delete(userController.deleteUser);


module.exports=router;