var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('./.config.js');

var app = express();
var port = 3000;
var corsOptions = {
    origin: 'http://localhost:3000'
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors(corsOptions));



app.listen(function(){
    console.log('listening on port ' + port);
})