const express = require("express")
const router = express.Router()
const controller = require("../controllers/recipe.controller")

router.post("/", controller.post)
//router.put("/:id", controller.put)
router.get("/", controller.get)

module.exports = app => app.use("/recipes", router)