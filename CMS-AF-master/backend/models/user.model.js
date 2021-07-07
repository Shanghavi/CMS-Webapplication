const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email:String,
  name: String,
  phone:String,
  city:String,
  state:String,
  country:String,
  qualification:String,
});

const customer = mongoose.model("customer", UserSchema);
module.exports = customer;
