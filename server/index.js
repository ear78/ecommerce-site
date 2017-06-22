var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var app = module.exports = express();


var conn = massive.connectSync({connectionString : "postgres://postgres@localhost/konsumer"}) ;

app.set('db', conn);
// NEEDS TO BE UNDER APP.SET TO SET YOUR DATABASE PROPERLY
var db = app.get('db');

app.use(bodyParser.json());
app.use(cors());


//DIRECTORY
app.use(express.static('./public'));

var productCtrl = require('./controllers/productCtrl.js');

app.post('/email', productCtrl.postEmail);
// app.get('/jackets', productCtrl.getJackets);



var port = process.env.PORT || 9000;

app.listen(port, function(){
    console.log('listening on', port);
})
