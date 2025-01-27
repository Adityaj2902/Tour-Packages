const fs = require('fs');
const express = require('express');
const morgan=require('morgan');


const app = express();

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());



app.use((req,res,next)=>{
  console.log('Hello From the MiddleWear');
  next(); //it always important to call the next function because it will stop tyhe further code execution
})

app.use((req,res,next)=>{
  req.requestedTime=new Date().toISOString();
  next();
})

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


app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/users',userRouter);


// ROUTE 

// app.get('/api/v1/tours/:id',getAllToursById );
// app.post('/api/v1/tours',createNewTour);
// app.patch('/api/v1/tours/:id',UpdateNewTour);
// app.delete('/api/v1/tours/:id',deleteTour);

// Now the Most Alternative Way of Writing that if the version of the website got changed then at only single route if we
// can easily be able to change 



// tourRouter is a middleware here 




// SERVER 

const port = 3000;

app.listen(port, () => {

  console.log(`App running on port ${port} ...`);

}); 

