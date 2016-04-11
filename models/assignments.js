var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assignmentSchema = new Schema({
  studentName: {type: String, required: true},
  assignmentNumber: Number,
  score: Number,
  dateCompleted: {type: Date, required: true},
  dumb: Boolean,
  admin: Boolean
});
var assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = assignment;
