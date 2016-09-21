var firebaseFunc = require('./app/firebase/fireBase.js');

var express = require('express');
var app = express();

var index = require('./app/index.js');
var result = index.callResult();

app.set('views', ['./views', './views/home']);
app.set('view engine', 'pug');

app.use('/lib', express.static('bower_components'));
app.use(express.static('public'));


app.get('/', function(req, res) {
    //res.send('Hello World!');
    var socialMedia = ["facebook", "twitter", "instagram", "yelp", "wikipedia-w", "tripadvisor"] ;
    res.render('index', {
        api : socialMedia,
        message: result,
        links: ['aaa', 'bbb']
    });
});

app.get('/getSearchResults', function(req, res) {
    if (req.query.searchAPI != null && req.query.searchAPI != '') {
        res.send("It is going to search for: " + req.query.searchAPI);
    } else {
        res.status(500).send('Problem accured during the process');
    }
});

app.listen(process.env.PORT || '3000', function() {
    console.log('Example app listening on port 3000!');
});
