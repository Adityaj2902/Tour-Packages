const Tour = require('../models/tourmodel');
// const fs = require('fs');
// const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));

exports.createNewTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getAllTours = async (req, res) => {

  try {
    const getAllTours = await Tour.find();

    return res.status(200).json({
      status: 'success',
      results: getAllTours.length,
      data: {
        tours: getAllTours
      }
    });
  }
  catch (errr) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }

};

exports.getTourById = async (req, res) => {

  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    });
  }
  catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
}

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.status(201).json({
      status: 'success',
      data: {
        tour
      }
    })
  }
  catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}

exports.deleteTour=async(req,res)=>{
  try{
    const tour=await Tour.findByIdAndDelete(req.params.id);

    res.status(201).json({
      status:'success',
      data:{
        tour:'< Tours has Been Deleted>'
      }
    })
  }
  catch(err){
    res.status(404).json({
      status:'fails',
      message:err
    })
  }
}