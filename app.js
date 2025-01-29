const fs = require('fs');
const express = require('express');
const morgan=require('morgan');
const tourRouter=require('./routes/toursRoute');
const userRouter=require('./routes/userRoute');


const app = express();

// MIDDLEWARES

app.use(morgan('dev'));

app.use(express.json());

app.use((req,res,next)=>{
  console.log('Hello From the MiddleWear');
  next(); //it always important to call the next function because it will stop tyhe further code execution
});

app.use((req,res,next)=>{
  req.requestedTime=new Date().toISOString();
  next();
});






app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/users',userRouter);


// SERVER 


module.exports=app;