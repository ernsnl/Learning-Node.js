var express = require('express');
var app = express();


app.set('views', './views');
app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  //res.send('Hello World!');
  res.render('index', {message : 'Hello World'});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
