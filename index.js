// Grab any node module we want to use
let express = require('express')

// Declare my app instance
let app = express()

// Declare routes / is the homepage route
app.get('/', (req,res) => {
    res.send('<h1>HELLO SEI!</h1>')
})

// Pick a port to listen on
app.listen(3000)