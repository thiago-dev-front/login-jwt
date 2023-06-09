const express = require('express');
const bodyParser = require('body-parser');

const api = require('./routes/api');
const port = 3000;

const app = express();

app.use(bodyParser.json()); 

app.use('/api', api);


app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});