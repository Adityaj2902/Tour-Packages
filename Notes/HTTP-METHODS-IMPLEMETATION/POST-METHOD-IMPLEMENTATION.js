app.post('/api/v1/tours',(req,res)=>{
  // console.log(req.body);
  const newId = tours[tours.length-1].id+1;
  
  const newTour = Object.assign({id:newId},req.body);

  tours.push(newTour);
  fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err=>{
    res.status(201).json({
      status:'success',
      data:{
        tour:newTour
      }
    });
  });
});