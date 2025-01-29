const fs = require('fs');

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));


exports.checkID=(req,res,next,val)=>{
  if(req.params.id*1 >tours.length){
    return res.status(404).json({
      message:'Invalid ID',
      status:'fail'
      
    });
  }
  next();
}


exports.checkBody=(req,res,next)=>{

  if(!req.body.name || !req.body.price){
    return res.status(400).json({
      status:"Fail",
      message:"Missing Name or Price"
    })
  }
  next();

}
// ROUTE HANDLERS 

exports.getAllToursById = (req, res) => {
    const id = req.params.id*1;   //MULTIPLY BY 1 HELP US TO CONVERT THE STRING INTO A NUMBER
    const tour = tours.find(el=>el.id === id);
   // if(id>tours.length){
    //    if(!tour){
    //    return res.status(404).json({
    //    message:'Invalid ID',
    //    status:'fail',
       
    //   });
    // }
    res.status(200).json({
      status: 'success',
      // results:tours.length,
      data: {
        requestedAt:req.requestedTime,
        tours:tour
       }
     });
     }
  
     exports.createNewTour=(req,res) => {
      // console.log(req.body);
      const newId = tours[tours.length-1].id+1;
      
      const newTour = Object.assign({id:newId},req.body);
    
      tours.push(newTour);
      fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err=>{
        res.status(201).json({
          status : 'success',
          data:{
            tour : newTour
          }
        });
      });
    }
  
  
exports.UpdateNewTour=(req,res)=>{
  
    // if(req.params.id*1 >tours.length){
    //   return res.status(404).json({
    //     message:'Invalid ID',
    //     status:'fail'
    
    //  });
    // }
  
    res.status(200).json({
      status: 'success',
      data:{
        tour: '<Update Tour Here>'
      }
    });
  
  };
  
  
exports.deleteTour=(req,res)=>{
    
    // if(req.params.id*1 >tours.length){
    //   return res.status(404).json({
    //     message:'Invalid ID',
    //     status:'fail'
        
    //   });
    // }
    
    res.status(204).json({
      status: 'success',
      data:null
    });
    
  }