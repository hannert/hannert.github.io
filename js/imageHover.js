$(document).ready(function(){
    $(".HIimage").hover(function(){
        $("p",this).css("opacity", 1);
    }, function(){
        $("p",this).css("opacity", 0);
    })
})