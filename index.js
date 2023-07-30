
$(document).ready(function(){
    $('.owl-one').owlCarousel({
        loop:true,
        autoplayHoverPause:true,
        items: 1,
        singleItem: true,
        autoplay:true,
    });

    $('.owl-two').owlCarousel({
        loop:true,
        margin:10,
        items: 5,
        dot:false,
        autoplay:true,
    });
});


