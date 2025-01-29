router.param('id',(req,res,next,val)=>{
    console.log(`Tour Id is ${val}`);
    next();
  })



  // In Express.js, router.param() is a middleware function that is used to capture parameters in the route's URL 
  // and perform actions on them before handling the actual route logic.