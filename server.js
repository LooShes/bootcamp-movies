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

app.get('/movies/:paramss', function (request, response){
    let movie = request.params.paramss
    console.log(movie)

    urllib.request(`http://www.omdbapi.com/?s=${movie}&apikey=a2e2ca53`, function (err, data){

        let result = JSON.parse(data.toString())
        
        result = result.Search.map(item => {
            return { 
                poster: item.Poster,
                title: item.Title,
                year: item.Year,
                id: item.imdbID
                    }
        }) 
        console.log(result)   
        response.send(result)
    })
})



