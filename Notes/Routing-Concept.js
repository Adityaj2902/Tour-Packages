
// OLD CLASSICAL WAY OF WRITING ROUTES

// ROUTE 

// app.get('/api/v1/tours/:id',getAllToursById );
// app.post('/api/v1/tours',createNewTour);
// app.patch('/api/v1/tours/:id',UpdateNewTour);
// app.delete('/api/v1/tours/:id',deleteTour);




const tourRouter = express.Router(); 

app.use('/app/v1/tours ',tourRouter);

// tourRouter is a middleware here 

tourRouter
// app 
// .route('/api/v1/tours') 
// ---> Got Replaced By 
.route('/')
// Now here we dont hve to write full path just by using express .Router
.get(getAllToursById)
.post(createNewTour);

tourRouter
// app 
// .route('/api/v1/tours/:id')
//-> Got Replaced By
.route('/:id')
.get(getAllToursById)
.patch(UpdateNewTour)
.delete(deleteTour);



// Whatever I DOne in the improvement of rotuing that is known as mounting 