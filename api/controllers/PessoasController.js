'use strict';
var mongoose = require('mongoose'),
  Pessoa = mongoose.model('Pessoas');

exports.list_all_pessoas = function(req, res) {
    Pessoa.find({}, function(err, pessoa) {
    if (err)
      res.send(err);
    res.json(pessoa);
  });
};

exports.create_pessoa = function(req, res) {
  var nova_pessoa = new Pessoa(req.body);
  nova_pessoa.save(function(err, pessoa) {
    if (err)
      res.send(err);
    //res.json(pessoa);
    res.json({ mensagem: 'Pessoa cadastrada com sucesso!' });
  });
};


exports.read_pessoa = function(req, res) {
  Pessoa.findById(req.params.pessoaId, function(err, pessoa) {
    if (err)
      res.send(err);
    res.json(pessoa);
  });
};


exports.update_pessoa = function(req, res) {
  Pessoa.findOneAndUpdate({_id: req.params.pessoaId}, req.body, {new: true}, function(err, pessoa) {
    if (err)
      res.send(err);
    res.json(pessoa);
  });
};


exports.delete_pessoa = function(req, res) {
  Pessoa.remove({
    _id: req.params.pessoaId
  }, function(err, pessoa) {
    if (err)
      res.send(err);
    res.json({ message: 'Pessoa deletada com sucesso!' });
  });
};