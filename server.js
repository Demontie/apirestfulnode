var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000,
  mongoose = require('mongoose'),
  Pessoa = require('./api/model/PessoasModel'), //created model loading here
  bodyParser = require('body-parser');

// conexão com o mongodb
//mongoose.Promise = global.Promise;
mongoose.connect('mongodb://dev:dev112233@ds113122.mlab.com:13122/pessoas');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

var routes = require('./api/routes/PessoasRoutes'); //importa rotas
routes(app); //registra as rotas importadas


app.listen(port);


console.log('API rodando na porta: ' + port);
