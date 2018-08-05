var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000,
  mongoose = require('mongoose'),
  Pessoa = require('./api/model/PessoasModel'), //created model loading here
  bodyParser = require('body-parser');

// conexão com o mongodb
//mongoose.Promise = global.Promise;
//Pode mudar, fazendo a instalação do mongodb(https://www.mongodb.com/) mas essa url esta sendo utilizada no mlab(https://mlab.com), essa url ficará invalida!
//Tem que mudar essa url 
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds113122.mlab.com:13122/pessoas');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Para o node aceitar requisições
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

var routes = require('./api/routes/PessoasRoutes'); //importa rotas
routes(app); //registra as rotas importadas


app.listen(port);


console.log('API rodando na porta: ' + port);
