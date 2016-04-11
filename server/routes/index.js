var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');
var assignment = require('../../models/assignments');

router.get('/', function(request,response){
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

module.exports = router;
