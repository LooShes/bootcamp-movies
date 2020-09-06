//const urllib = require('urllib')


$.get(`/sanity`, function(response) {
    console.log(response)
})


const fetchUserInput = function () {
    let input = $("#input").val()
    console.log(input)

    $.get(`/movies/${input}'`, function(movies) {
        console.log(movies)
        let renderer = new Renderer()
        renderer.render(movies)
})
}

$("#movies").on("click", "img", function() {
    let movieID = $(this).closest(".single-poster").data("id")
    console.log(movieID)

    urllib.request('http://www.omdbapi.com/?i=${movieID}&apikey=a2e2ca53', function (err, data){
        console.log(data)
})
})