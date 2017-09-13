const bodyParser = require('body-parser');
const multer = require ('multer');
const upload = multer();
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: true });

const express = require('express');
const app = express();
app.use(jsonParser);
app.use(urlencodedParser);

const eventosController = require('./controllers/eventos.js');
const actividadesController = require('./controllers/actividades');
// const oauth = require('./controller/oauth');
// curl -i -X "POST" "http://localhost:4200" -d "email=correo@gmail.com&password=123"
  
app.get('/', function() {
      console.log("Entré");
  });

// app.post('/oauth/token', oauth.validar);

app.get('/eventos', eventosController.inicio);

app.get('/actividades', actividadesController.inicio)

app.delete('/eventos/:id', eventosController.destroy);

exports.app = app;
