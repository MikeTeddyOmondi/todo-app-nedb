const express = require('express')
const router = express.Router()
const Task = require('../models/task')

// Load the router module for tasks.
router.use('/tasks', require('./tasks.routes.js'))

// Define the home page route.
router.get('/', function(req, res) {
  Task.all(function(err, result) {
    if (err) console.log(err)
    let obj = {
      tasks: result,
      helpers: {
        formatCreatedAt: function() {
          return this.createdAt.toLocaleDateString()
        }
      }
    }
    res.render('index', obj)
    // res.sendStatus(200)
    //res.json({ obj })
  })
})

module.exports = router

