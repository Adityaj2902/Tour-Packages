


app.use((req,res,next)=>{
    console.log('Hello From the MiddleWear');
    next(); //it always important to call the next function because it will stop tyhe further code execution
})