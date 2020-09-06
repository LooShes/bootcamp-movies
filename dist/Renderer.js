class Renderer {
    constructor() {
    }

    render(data) {
        const source = $('#template').html()
        const template = Handlebars.compile(source)
        let newHTML = template({movies: data})
        $('#movies').append(newHTML)
    }
}