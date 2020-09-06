const express = require('express')
const path = require('path')
const urllib = require('urllib')

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const port = 8080
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})

app.get('/sanity', function (request, response){
    response.send("OK!")
})

app.get('/movies/:title', function (request, response){
    urllib.request('http://www.omdbapi.com/?s=joker&apikey=a2e2ca53', function (err, data){
        let result = JSON.parse(data.toString())

        response.send(result)
})
})