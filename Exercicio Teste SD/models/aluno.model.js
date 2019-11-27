var mongoose = require('../database/connection');
const ObjectId = mongoose.Schema.Types.ObjectId

var alunoSchema = new mongoose.Schema({
  Nome: {
    type: String
  },
  Numero: {
    type: Number
  },
  
});

const Aluno = mongoose.model('Aluno', alunoSchema);

module.exports = Aluno;