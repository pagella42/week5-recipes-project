//instance for renderer
const renderer = new Renderer

$("#send").click(function(){
    
    let input= $("#look").val()

    $.get(`recipes/${input}`, function(data){
        
        renderer.render(data)
       
    })
})

//prints first element of the ingredients for a recipe, when the image is clicked
$("body").on("click", "img",function(){
    
    let firstelement = $(this).closest(".content").find("li")
    console.log(firstelement[0])
})



//hides searchbar
$("#hide").click(renderer.slider)
$("#send").click(renderer.slider)


