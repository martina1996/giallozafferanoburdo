const express = require('express');
const app = express();
const PORT = process.env.port  || 21460 ;

require('./config/db.js');
require('./routes/routes.js')(app, express)
 

app.listen(PORT, () => {
    console.log('http://localhost:' + PORT)
})