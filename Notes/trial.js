const express= require('express');



const app=express();


app.get('/',(req,res)=>{
    res
    // .send('Hello From the Server Side')
    .json({message:'Hello From The Server Side',App:"Natours"});
});

app.post('/',(req,res)=>{
    res.send('You Can Post to this URL');
})


const port=3000;

app.listen(port,()=>{
    console.log(`App is Listening on Port no ${port}`);
})