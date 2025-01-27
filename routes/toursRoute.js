const express= require('express');

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

// ROUTE HANDLERS 

const getAllToursById = (req, res) => {
  const id = req.params.id*1;   //MULTIPLY BY 1 HELP US TO CONVERT THE STRING INTO A NUMBER
  const tour = tours.find(el=>el.id === id);
 // if(id>tours.length){
     if(!tour){
     return res.status(404).json({
     message:'Invalid ID',
     status:'fail',
     
    });
  }
  res.status(200).json({
    status: 'success',
    // results:tours.length,
    data: {
      requestedAt:req.requestedTime,
      tours:tour
     }
   });
   }

   const createNewTour=(req,res) => {
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


const UpdateNewTour=(req,res)=>{

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

};


const deleteTour=(req,res)=>{
  
  if(req.params.id*1 >tours.length){
    return res.status(404).json({
      message:'Invalid ID',
      status:'fail'
      
    });
  }
  
  res.status(204).json({
    status: 'success',
    data:null
  });
  
}

const getAllUsers=(req,res)=>{
  res.status(500).json({
    status:'error',
    message:'This Route is not ye defined'
  })
}

const createdUser=(req,res)=>{
  res.status(500).json({
    status:'error',
    message:'This Route is not ye defined'
  })
}

const deleteUser=(req,res)=>{
  res.status(500).json({
    status:'error',
    message:'This Route is not ye defined'
  })
}



const router=express.Router(); 


router
// app 
.route('/')
.get(getAllToursById)
.post(createNewTour);

router
// app 
.route('/:id')
.get(getAllToursById)
.patch(UpdateNewTour)
.delete(deleteTour);


module.exports=router;