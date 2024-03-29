const mongoose = require('mongoose');
const {Schema} = require('mongoose')

const userSchema = new mongoose.Schema({
fullName:{
  type:String,
  required:true,
  trim:true
},
userName:{
  type:String,
  required:true,
  unique:true,
  trim:true
},
email:{
  type:String,
  required:true,
  unique:true
},
tel:{
  type:Number,
  minlength:10,
  maxlength:10
},
password:{
  type:String,
  required:true,
},
hash:{
  type:String,
}
},{timestamps:true})

const User = mongoose.model('User',userSchema);
module.exports = User;