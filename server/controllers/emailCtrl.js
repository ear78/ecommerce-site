var app = require('../index');
var db = app.get('db');

module.exports = {
    createEmail: function(req,res,next){
        db.post_email([req.body.email], function(err, email){
                res.status(200).json(email);
        })
    }
}
