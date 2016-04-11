var express = require('express');
var app = express();
var mongoose = require('mongoose');
var index = require('./routes/index');
var assignment = require('./routes/assignment');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static('server/public'));

app.use('/', index);
app.use('/assignment', assignment);
app.use('/task', assignment)

var mongoURI = "mongodb://localhost:27017/assignments";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});


var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port:', port);
});
