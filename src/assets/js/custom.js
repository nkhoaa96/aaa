
$(document).ready(function(){
    var owls = $('.quote-carousel');
    owls.owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 1,
        dots:true,
        autoHeight: true,
        navText:["<div class='nav-btn prev-slide'><img class='visible-desktop' src='../assets/images/prev_btn.png'><img class='visible-mobi' src='../assets/images/prev_mobile.png'></div>",
            "<div class='nav-btn next-slide'><img class='visible-desktop' src='../assets/images/next_btn.png'><img class='visible-mobi' src='../assets/images/next_mobile.png'></div>"],
    });
});
