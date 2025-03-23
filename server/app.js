const express = require('express')
const app = express();
const registerRoute= require("./routes/registerRoute")

const cors = require('cors');
const bodyparser = require('body-parser')
require('dotenv').config()
const port = process.env.PORT
const dbConnect  = require("./utils/database")

app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use('/user',registerRoute)

dbConnect()
app.listen(port,()=>{
  console.log(`server run on ${port}`);
})