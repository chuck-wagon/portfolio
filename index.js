// Grab any node module we want to use
let express = require('express')

// Declare my app instance
let app = express()

// Declare routes / is the homepage route
app.get('/', (req,res) => {
    res.send('<h1>This will be our little secret!</h1><p>-Chalk Wagen </p><img src="https://media.giphy.com/media/dMGvcduPkahSo/giphy.gif" alt="Bob Ross">')
    
})
// Pick a port to listnen on
app.listen(3000)