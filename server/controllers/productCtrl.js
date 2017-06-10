var app = require('../index');
var db = app.get('db');

module.exports = {
    postEmail: function(req,res,next){
        console.log(req.body);
        db.post_email([req.body.email], function(err, email){
                res.status(200).json(email);
        })
    },
    getJackets: function(req,res,next){
        db.get_product(function(err,products){
            res.status(200).json(products);
        })
    }

}
