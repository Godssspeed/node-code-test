const express = require('express')

const {getPullRequests} = require('./controller/request')

const app = express()

const PORT = 3000

// Example: `http://localhost:3000/soostone/katip`
app.get('/:username/:repo', getPullRequests)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})

module.exports = app