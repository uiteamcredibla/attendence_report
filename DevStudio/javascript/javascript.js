// navbar function
$(document).on("scroll", function(){
    if
    ($(document).scrollTop() > 100){
        $("#banner").addClass("shrink");
    }
    else
    {
        $("#banner").removeClass("shrink");
    }
});


// owl-carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        nav:false,
        dots: true,
        responsive:{
            0:{
                items:1,
            }
        }
    });
});

// AOS animation
AOS.init({
    duration: 1000
});
