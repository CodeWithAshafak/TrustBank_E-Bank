const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
  Fname: { 
    type: String,
    required: [true, "First name is required"], // Custom error message
    trim: true, // Removes whitespace before and after the value
  },
  Lname: {
    type:String,
    required:[true,"Last name is required"],
    trim:true
  },
  email: {
    type:String,
    required:[true,"email is required"],
    trim:true
  },
  mobile:{
    type:Number,
    required:[true,"Mobile number is required"],
    trim:true
  },
  address: {
    type:String,
    required:[true,"address is required"],
    trim:true
  },
  city: {
    type:String,
    required:[true,"City is required"],
    trim:true
  },
  state: {
    type:String,
    required:[true,"State is required"],
    trim:true
  },
  password: {
    type:String,
    required:[true,"password is required"],
    trim:true
  },
 Account: {
    type:Number,
    required:[true,"Account is required"],
    trim:true
  }

})

module.exports =  mongoose.model('user',userSchema)