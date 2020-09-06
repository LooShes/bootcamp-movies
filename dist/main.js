


$.get(`/sanity`, function(response) {
    console.log(response)
})


const fetchUserInput = function () {
    let input = $("#input").val()

    $.get(`/movies/${input}'`, function(movies) {

        let renderer = new Renderer()
        renderer.render(movies)
})
}

// $("#movies").on("click", "img", function() {
//     let movieID = $(this).closest(".single-poster").data("id")
//     console.log(movieID)

//     let title = $(this).closest(".single-poster").find("p").text()

//     $.get(`/movies/${title}'`, function(movies) {
//         console.log(movies)
//     })
// })