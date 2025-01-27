

app.get('/api/v1/tours/:id',getAllToursById );
app.post('/api/v1/tours',createNewTour);
app.patch('/api/v1/tours/:id',UpdateNewTour);
app.delete('/api/v1/tours/:id',deleteTour);

// Now the Most Alternative Way of Writing that if the version of the website got changed then at only single route if we
// can easily be able to change 

app
.route('/api/v1/tours')
.get(getAllToursById)
.post(createNewTour);

app
.route('/api/v1/tours/:id')
.get(getAllToursById)
.patch(UpdateNewTour)
.delete(deleteTour);