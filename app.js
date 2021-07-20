const express = require('express');
const compression = require('compression');

const app = express();

// Middleware application
app.use(compression());

const {middleware1, middleware2} = require('./middlewares.js');
const {handlerRoot, handlerTime, trazabilidad} = require('./handlers.js');



let router = express.Router()
router.get('/',trazabilidad, middleware1, middleware2, handlerRoot);
router.get('/time',trazabilidad, handlerTime);

app.use(router);

app.listen(3000, function () {
  console.log('Escuchando el puerto 3000!');
});