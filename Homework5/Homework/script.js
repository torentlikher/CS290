var express = require('express');
var app = express();
var handlebars = require("express-handlebars").create({defaultLayout:'main'});
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 2565);

app.listen(2565);

app.post('/', function(req, res){
    console.log('post route');
    var qParams = [];
    for (var p in req.query){
      qParams.push({'key':p,'value':req.query[p]})
    }

    var context = {};
    context.dataList = qParams;
    res.render('post-loopback', context);
});

app.get('/', function(req, res){
    console.log('get route');
    var qParams = [];
    for(var p in req.query){
        qParams.push({'key':p, 'value':req.query[p]})
    }

    var context = {};
    context.dataList = qParams;
    res.render('get-loopback', context);
});

app.use(function(req, res){
    res.status(404);
    res.render('404')
});
