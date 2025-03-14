const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./../../models/tourModel'); // Corrected import

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE_LOCAL.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, { // Use the DB variable here
    useUnifiedTopology: true,   // Recommended for the new topology engine
    useNewUrlParser: true,      // This is still good for legacy compatibility, but optional in 6.x
    serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
    socketTimeoutMS: 45000 // Increase socket timeout to 45 seconds
})
    .then(con => {
        console.log("DB Connection Successful");
    })
    .catch(err => {
        console.error("DB Connection Error", err);
    });

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'));

// IMPORT ALL THE DATA FROM THE FILE INTO MY DATABASE 

const importData = async () => {
    try {
        await Tour.create(tours);
        console.log("Data Successfully Loaded")
        process.exit();
    }
    catch (err) {
        console.log(err);
    }
}

// DELETE ALL DATA FROM DB

const deleteData = async () => {
    try {
        await Tour.deleteMany();
        console.log("Data Successfully Deleted");
        process.exit();
    }
    catch (err) {
        console.log(err);
    }
}

if (process.argv[2] === '--import') {
    importData();
}
else if (process.argv[2] === '--delete') {
    deleteData();
}

console.log(process.argv);