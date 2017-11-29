// Required NPM Packages
//require("./config/connection");
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
//var routes = require('./controllers/news.js');
var app = express();
var mongoose = require('mongoose');
var expressHandlebars = require('express-handlebars');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'handlebars');
var port = process.env.PORT || 3000;
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.listen(port, function() {
    console.log("Listening on port:" + port);
});
const scraper = require("./controller/stories.js");
app.use(scraper);
