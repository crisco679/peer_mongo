var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');
var assignment = require('assignments');



router.get('/', function(request,response){
  console.log(path.join(__dirname, '../public/views/index.html'));
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

module.exports = router;
