const mongoose = require('mongoose');


const tourSchema= new mongoose.Schema({
  name:{
    type:String,
    required:[true,'A Tour must have a name'],
    unique:true
  },

  duration:{
    type:Number,
    required:['true','A tour must have a duration']
  },
  
  maxGroupSize:{
    type:Number,
    required:['A tour must have a Group Size']
  },

  difficulty:{
    type:String,
    required:['A Tour Must have a diffculty']
  },

  ratingAverage:{
    type:Number,
    default:4.5
  },

  ratingsQuantity:{
    type:Number,
    default:0
  },

  rating :{
    type:Number,
    default:4.5
  },

  price:{
    type:Number,
    required:[true,'A tour must have a price']
  },
  price:Number,
  summary:{
    type:String,
    trim :true,
    required:[true,'A tour must have a summery']
    // here trim means every extra whitespace will get deleted 
  },
  description:{
    type:String,
    trim:true
  },
  imageCover:{
    type:String,
    required:['A tour must have a cover image']
  },
  images:[String],
  createdAt:{
    type:Date,
    default:Date.now()
  },
  startDates:[Date]

})

const Tour=mongoose.model('Tour',tourSchema);

module.exports=Tour;