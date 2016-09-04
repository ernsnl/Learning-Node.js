var express = require('express');
var app = express();

var index = require('./app/index.js');
var result = index.callResult();

app.set('views', './views');
app.set('view engine', 'pug');

app.use('/lib', express.static('bower_components'));
app.use(express.static('public'));


app.get('/', function (req, res) {
  //res.send('Hello World!');
  res.render('index', {message : result});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
