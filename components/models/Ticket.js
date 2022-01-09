const mongoose = require("mongoose"); 


  const ticketSchema = new mongoose.Schema({

  title:{type:String,required:true},description:{type:String,required:true},author:{type:String,required:true},state:{type:String,required:true},createdOn: {
    type: Date,
    required: true,
    default: Date.now(),
  },

  }); 


  module.exports = mongoose.models.ticket || mongoose.model("ticket", ticketSchema);