const User = require('../models/user.model.js')

async function post(req, res) {
    try {
        
        User.create(req.body)
        return res.send()
    }

    catch (err) {
        
        return res.status(400).send({ error: `Could not create user: ${err}` })

    }
}


async function get(req, res) {
    try {

        return res.send(await User.find())

    } catch (err) {

        return res.status(400).send({ error: `Could not get users: ${err}` })
        
    }
}

module.exports = { post, get }