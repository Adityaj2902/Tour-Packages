
//RESPONDING TO URL PARAMETERS

// IF WE WILL WRITE SOMETHING WITH THE HELP OF ":" THAT MEANS WE CAN ABLE TO GIVE PARAMAS OR SET URL WITH ID 

// IF YOU WANT TO SEE THR PROPERTY OF THIS THEN YOU CAN LOG WITH (Req.params)


// app.get('/api/v1/tours/:id/:x/:y ? ',=> One thing u can see here is that is u want to keep optional the url parameters then you can 


app.get('/api/v1/tours/:id/:x/:y ? ', (req, res) => {
    console.log(req.params)
     res.status(200).json({
       status: 'success',
       // results:tours.length,
       // data: {
       //   tours
       // }
     });
   });