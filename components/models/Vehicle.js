const mongoose = require("mongoose"); 


  const vehicleSchema = new mongoose.Schema({

  year:{type:String,required:true},make:{type:String,required:true},model:{type:String,required:true},miles:{type:String,required:true},listingPrice:{type:String,required:true},createdOn: {
    type: Date,
    required: true,
    default: Date.now(),
  },

  }); 


  module.exports = mongoose.models.vehicle || mongoose.model("vehicle", vehicleSchema);