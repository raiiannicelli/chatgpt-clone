const express = require("express")
const promptController = require("../controller/prompt-controller")

const routes = express.Router()

routes.post('/api/prompt', promptController.sendText)

module.exports =  routes