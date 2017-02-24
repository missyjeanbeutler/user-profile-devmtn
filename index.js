var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('./.config.js');
var profileCtrl = require('./controllers/profile_ctrl.js');
var userCtrl = require('./controllers/user_ctrl.js');
var session = require('express-session')


var app = express();
var port = 3000;
var corsOptions = {
    origin: 'http://localhost:3000'
};

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors(corsOptions));
app.use(session({
    secret: config.SESSION_SECRET,
    // resave: false,
    // saveUninitialized: true
}))


app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.friends);



app.listen(port, function(){
    console.log('listening on port ' + port);
}) 