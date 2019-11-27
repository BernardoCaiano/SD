const Recipe = require('../models/recipe.model.js')

async function post(req, res) {
    try {
        
        Recipe.create(req.body)
        return res.send()
    }

    catch (err) {
        
        return res.status(400).send({ error: `Could not create recipe: ${err}` })

    }
}


async function get(req, res) {
    try {

        return res.send(await Recipe.find())

    } catch (err) {

        return res.status(400).send({ error: `Could not get recipe: ${err}` })
        
    }
}

module.exports = { post, get }