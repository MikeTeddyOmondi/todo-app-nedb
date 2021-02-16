const Datastore = require('nedb')           
const db = new Datastore({
    filename: 'tasks.db',
    autoload: true, // automatically load the database (no need to call loadDatabase)
    timestampData: true // automatically add and manage the fields createdAt and updatedAt
})

module.exports = db
