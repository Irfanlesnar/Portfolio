var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}



function change_text_ai(){
    var old = document.getElementById("ai_view")
    
    if (old.innerHTML === "Close Artworks"){
        

        old.innerHTML = "View Artworks";
        old.style.backgroundColor = "#0dcaf0";
        old.style.color="black";
        var bg = document.body.style
        bg.backgroundImage = "";
        
    }
    else{
        old.innerHTML = "Close Artworks";
        old.style.backgroundColor = "#f22e29"
        old.style.color="white";
        var bg = document.body.style
        bg.backgroundImage = "url(images/artworkbg.svg)";
    }

    var x =document.getElementById("myDIV");
    if(x.style.display === "block")
    {
        x.style.display = "none";

    }
    else{
        x.style.display="block";
    }

}

