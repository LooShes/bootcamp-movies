$.get(`/sanity`, function(response) {
    console.log(response)
})


// const fetchUserInput = function () {
//     let input = $("#input").val()
//     console.log(input)

    $.get(`/movies/:title'`, function(response) {
        console.log(response)
})
//}