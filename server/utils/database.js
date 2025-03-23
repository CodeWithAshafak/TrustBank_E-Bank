const mongoose = require("mongoose")
require('dotenv').config();
const dbConnect =()=>{
  try {
    mongoose.connect(process.env.DB_CONN).then(()=>{
      console.log('DB Connected Succesfull');
    })
  } catch (error) {
    console.error(error)
  }
}

module.exports=dbConnect