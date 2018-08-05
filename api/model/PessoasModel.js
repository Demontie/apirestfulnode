'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PessoaSchema = new Schema({
  nome: {
    type: String,
    required: 'Digite o nome da pessoa!'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  idade: {
    type: Number,
    required: 'Digite a idade!'
  }
});

module.exports = mongoose.model('Pessoas', PessoaSchema);