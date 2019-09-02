
class Renderer {
    //renders recipe
    render(data) {
        $("#container").empty() 

        const source = $('#container-template').html();
        const template = Handlebars.compile(source)
        let somehtml = template({ data })
        $("#container").append(somehtml)
    }

    //button that hides searchbar
    slider(){
        $("#searchcontainer").slideToggle()
        $("#hide").toggleClass("up down")
    }
}