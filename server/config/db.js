var mongoose = require('mongoose');

mongoose.connect(
    'mongodb://admin:admin1990>@ds133630.mlab.com:33630/giallozafferanoburdo',
    {
        useCreateIndex: true,
        useNewUrlParser: true
    },
    function (err) {
        if (err) console.log(err);
        else console.log("connesso al db");
    });

mongoose.Promise = global.Promise;