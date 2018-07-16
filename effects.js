$(document).ready(function(){
    $("#photo").hover(function(){
        $(this).fadeTo(1000, 0.4);
    }, function(){
        $(this).fadeTo(0.4, 1000);
    });
});



$(document).ready(function(){
    $("#photo2").hover(function(){
        $(this).hide(1000);},
    
    $("#photo").hover(function(){
        $("#photo2").show(1000);
    }));
});

$(document).ready(function(){
    $("#photo").click(function(){
        $("#tabel").toggle(1000);
    });
});

