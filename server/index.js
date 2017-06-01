var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var app = module.exports = express();


var connectionString = "postgres://elliotrichardson@localhost/konsumer";
var massiveInstance = massive.connectSync({connectionString : connectionString})

app.set('db', massiveInstance);
// NEEDS TO BE UNDER APP.SET TO SET YOUR DATABASE PROPERLY
var db = app.get('db');

app.use(bodyParser.json());
app.use(cors());


//DIRECTORY
app.use(express.static('./public'));

var productCtrl = require('./controllers/productCtrl.js');

app.get('/jackets', productCtrl.getJackets);

// db.new_plane(function(err, planes){
//     console.log(err, "plane added");
// })


// db.add_product(function(err,products){
//     console.log(err,"product added");
// });



// var port = process.env.PORT || 9000;

app.listen(9000, function(){
    console.log('listening on', 9000);
})
