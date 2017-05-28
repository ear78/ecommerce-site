var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = "postgres://postgres:@localhost/konsumer";

var app = module.exports = express();

// var db = massive.connectSync({
//     db: "konsumer"
// });

var massiveInstance = massive.connectSync({connectionString : connectionString})

app.set('db', massiveInstance);

app.use(cors());
app.use(bodyParser.json());

//DIRECTORY
app.use(express.static('./public'));

var emailCtrl = require('./controllers/emailCtrl.js');

app.post('/email', emailCtrl.createEmail);




var port = process.env.PORT || 9000;

app.listen(port, function(){
    console.log('listening on', port);
})
