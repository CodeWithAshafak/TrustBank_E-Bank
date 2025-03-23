const express = require("express")
const route = express.Router()
const regiserController = require("../controller/registerController")
route.post('/useregistration',regiserController.register)

module.exports= route