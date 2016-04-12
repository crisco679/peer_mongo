var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');
var Assignment = require('../../models/assignments');



router.post('/create', function(request,response){
  var user = request.body;
  console.log(user);
  console.log(request);
  var task = new Assignment({
    studentName: user.studentName,
    assignmentNumber: user.assignmentNumber,
    score: user.score,
    dateCompleted: user.dateCompleted,
    dumb: user.dumb,
    admin: user.admin
  });
  task.save(function(err){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {
      console.log('User saved successfully!');
      response.sendStatus(200);
    }
  });
  });

});
router.get('/all', function(request, response){
  console.log("response of all");


    Assignment.find({}, function(err, assignments){
      if(err){
        console.log(err);
        response.sendStatus(500);
      } else {
        response.send(assignments);
      //  response.sendStatus(200);
      }
    });
});

router.get('/task', function(request,response){
 var chris = new Assignment({
   studentName: "dumb assignment",
   assignmentNumber: 1,
   score: 2,
   dateCompleted: 12/12/2012,
   dumb: true,
   admin: false
 });
 // chris.save(function(err){
 //   if(err){
 //     console.log(err);
 //     response.sendStatus(500);
 //   } else {
 //     console.log('User saved successfully!');
 //     response.sendStatus(200);
 //   }

//  });
});
module.exports = router;
