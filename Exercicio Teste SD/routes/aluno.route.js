const express = require("express")
const router = express.Router()
const controller = require("../controllers/aluno.controller")

router.post("/", controller.post)
router.put("/:id", controller.put)
router.get("/", controller.get)

module.exports = app => app.use("/alunos", router)