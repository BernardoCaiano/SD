const mongoose = require("mongoose")
require('dotenv').config();

const uri = `mongodb+srv://Bernardo:bernardo@cluster0-2jlks.mongodb.net/Teste_SD`

mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})

mongoose.Promise = global.Promise

module.exports = mongoose
