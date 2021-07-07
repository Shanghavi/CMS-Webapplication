

const mongoose = require("mongoose");


const ConferenceSchema = mongoose.Schema({
  name: { type:String, required:true},
  date:{ type:String, required:true},
  topic: { type:String, required:true},
  description: { type:String, required:true},
  venue: { type:String, required:true},
  type:{ type:String, required:true},
  conductor:{ type:String, required:true},
  
});

module.exports = mongoose.model("Conference", ConferenceSchema);
