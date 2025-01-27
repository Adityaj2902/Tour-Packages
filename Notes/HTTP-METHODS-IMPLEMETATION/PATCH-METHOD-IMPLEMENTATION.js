app.patch('/api/v1/tours/:id',(req,res)=>{

  if(req.params.id*1 >tours.length){
    return res.status(404).json({
      message:'Invalid ID',
      status:'fail'
  
   });
  }

  res.status(200).json({
    status: 'success',
    data:{
      tour: '<Update Tour Here>'
    }
  });

});
