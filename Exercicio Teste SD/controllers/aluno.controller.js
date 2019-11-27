const Aluno = require('../models/aluno.model.js')

async function post(req, res) {
    try {
        
        Aluno.create(req.body)
        return res.send()
    }

    catch (err) {
        
        return res.status(400).send({ error: `Could not create book: ${err}` })

    }
}

async function put(req, res) {
   
    try {
        
        Aluno.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
            (err, data) => {
                if (err) {
                    return res.status(400).send({ error: `Could not edit aluno: ${err}` })
                }
            }
        )
        return res.send("edited")
    }

    catch (err) {
        return res.status(400).send({ error: `Could not edit aluno: ${err}` })

    }
}

async function get(req, res) {
    try {

        return res.send(await Aluno.find())

    } catch (err) {

        return res.status(400).send({ error: `Could not get alunos: ${err}` })
        
    }
}

module.exports = { post, put, get }