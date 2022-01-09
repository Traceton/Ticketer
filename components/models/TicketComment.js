const mongoose = require("mongoose"); 


  const ticketCommentSchema = new mongoose.Schema({

  ticket:{type:String,required:true},content:{type:String,required:true},author:{type:String,required:true},createdOn: {
    type: Date,
    required: true,
    default: Date.now(),
  },

  }); 


  module.exports = mongoose.models.ticketComment || mongoose.model("ticketComment", ticketCommentSchema);