'use strict';
module.exports = function(app) {
  var pessoas = require('../controllers/PessoasController');

  // Rotas pessoas
  app.route('/pessoas')
    .get(pessoas.list_all_pessoas)
    .post(pessoas.create_pessoa);


  app.route('/pessoas/:pessoaId')
    .get(pessoas.read_pessoa)
    .put(pessoas.update_pessoa)
    .delete(pessoas.delete_pessoa);
};
