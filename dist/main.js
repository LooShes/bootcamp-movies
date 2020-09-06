// $.get(`/sanity`, function(response) {
//     console.log(response)
// })


const fetchUserInput = function () {
    let input = $("#input").val()
    console.log(input)

    $.get(`/movies/${input}'`, function(movies) {
        console.log(movies)
        let renderer = new Renderer()
        renderer.render(movies)
})
}