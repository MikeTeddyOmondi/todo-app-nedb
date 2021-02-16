const express = require('express')
const router = express.Router()
const Task = require('../models/task')

// ROUTES FOR THE GOALS
// =============================================
// POST a new goal
// (accessed at POST http://localhost:5000/tasks)
router.post('/', function(req, res) {
  var description = req.body.description
  Task.create(description, function(err, goal) {
    if (err) {res.sendStatus(500).json(err)}
    res.redirect('/')
  })
})

// POST a new failure for a goal
// (accessed at POST http://localhost:5000/tasks/task_id/failure)
router.post('/:id/failure', function(req, res) {
  var task_id = req.params.id
  Task.addFailure(task_id, function(err, goal) {
    if (err) {res.send(err)}
    res.sendStatus(200);
  })
})

// POST a new success for a goal
// (accessed at POST http://localhost:5000/tasks/task_id/success)
router.post('/:id/success', function(req, res) {
  var task_id = req.params.id
  Task.addSuccess(task_id, function(err, goal) {
    if (err) {res.send(err)}
    res.sendStatus(200);
  })
})

// DELETE a goal
// (accessed at DELETE http://localhost:5000/tasks/task_id)
router.delete('/:id', function(req, res) {
  var task_id = req.params.id
  Task.delete(task_id, function(err, goal) {
    if (err) {res.send(err)}
    res.sendStatus(200);
  })
})

module.exports = router

