const express = require('express')
const body = require('body-parser')
const path = require('path') 
const exphbs = require('express-handlebars')

const app = express()

// To read POST data, we use the body-parser middleware.
app.use(body.json())
app.use(body.urlencoded({ extended: true }))

// Tell the app that the templating engine is Handlebars.
app.engine('handlebars',
  // Pass default configuration to express-handlebars module.
  exphbs({
    defaultLayout: 'mainLayout'
  }))

// Tell the app that the view engine is also Handlebars.
app.set('view engine', 'handlebars')

// Serve static files.
app.use(express.static(path.join(__dirname, 'public')))

// redirect material-design-lite JS and CSS
app.use('/js/material.min.js', express.static(__dirname + '/node_modules/material-design-lite/dist/material.min.js'))
app.use('/css/material.min.css', express.static(__dirname + '/node_modules/material-design-lite/dist/material.min.css'))

// Routes
app.use('/', require('./routes/index.routes.js'))
//app.use('/tasks', require('./routes/tasks.routes.js'))

let PORT = process.env.PORT || 5000

app.listen(PORT, (err) => {
	console.log('________________________________')
	console.log(`Server listening on port:${PORT}`)
  console.log('________________________________')
})
