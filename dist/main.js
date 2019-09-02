const renderer = new Renderer

$("#send").click(function(){
    
    let input= $("#look").val()

    $.get(`recipes/${input}`, function(data){
        
        renderer.render(data)
       
    })
})

$("body").on("click", "img",function(){
    
    let firstelement = $(this).closest(".content").find("li")
    console.log(firstelement[0])
})

$("#hide").click(renderer.slider)
$("#send").click(renderer.slider)


