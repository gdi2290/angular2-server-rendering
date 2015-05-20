var express = require('express');
var serveStatic = require('serve-static');
var morgan = require('morgan');
var path = require('path');


module.exports = function(ROOT) {
  var app = express();
  var router = express.Router();

  var iso = require(ROOT+'/dist/ng2Engine');
  // rendering engine

  app.use(morgan('dev'));
  app.engine('ng2.html', iso.ng2Engine);
  app.set('views', path.join(ROOT, 'src'));
  app.set('view engine', 'ng2.html');
  app.set('view options', { doctype: 'html' });


  router.route('/')
    .get(function(req, res) {

      res.render('index', require(ROOT+'/dist/app.server'));

    });
  app.use(router);

  app.use(serveStatic(ROOT + '/dist'));
  app.use(serveStatic(ROOT + '/public'));

  app.use('/lib', function(req, res) {
    serveStatic(ROOT + '/web_modules')(req, res);
  });

  // dev source maps
  app.use('/src', function(req, res) {
    serveStatic(ROOT + '/src')(req, res);
  });
  app.use('/node_modules', function(req, res) {
    serveStatic(ROOT + '/node_modules')(req, res);
  });
  app.use('/node_modules/angular2', function(req, res) {
    serveStatic(ROOT + '/dev_modules/node_modules/angular2')(req, res);
  });

  return app;
};