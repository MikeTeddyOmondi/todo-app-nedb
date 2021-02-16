const db = require('./db')
const getSlug = require('speakingurl')

// Insert a new goal in the database and return its id.
exports.create = function(description, callback) {
 var task = {
  description: description,
  slug: getSlug(description),
  successes: [],
  failures: []
 }
 db.insert(task, callback)
}

// Get all tasks.
exports.all = function(cb) {
 db.find({}).sort({
  updatedAt: -1
 }).exec(cb)
}

// Add a failure to the task with this slug.
exports.addFailure = function(task_id, cb) {
 db.update({
  _id: task_id
 }, {
  $push: {
   failures: new Date()
  }
 }, cb)
}

// Add a success to the task with this slug.
exports.addSuccess = function(task_id, cb) {
 db.update({
  _id: task_id
 }, {
  $push: {
   successes: new Date()
  }
 }, cb)
}

// Delete the task with this slug.
exports.delete = function(task_id, cb) {
 db.remove({
  _id: task_id
 }, {}, cb)
}

