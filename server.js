const dotenv = require('dotenv')
const app = require ('./app');
const mongoose = require('mongoose');


dotenv.config({path:'./config.env'});

const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
  useUnifiedTopology: true,   // Recommended for the new topology engine
  useNewUrlParser: true,      // This is still good for legacy compatibility, but optional in 6.x
  
})
  .then(con => {
    console.log("DB Connection Successful");
  })
  .catch(err => {
    console.error("DB Connection Error", err);
  });



// console.log(app.get('env'))

// console.log(process.env);

const port=process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App running on port ${port} ...`);
}); 


// NODE_ENV=development nodemon app.js  if you write this in terminal then it will create this variable under .env file

