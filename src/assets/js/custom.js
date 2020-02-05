
$(document).ready(function(){
    var owls = $('.quote-carousel');
    owls.owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 1,
        dots:true,
        navText:["<div class='nav-btn prev-slide'><img src='../assets/images/prev_btn.png'></div>","<div class='nav-btn next-slide'><img src='../assets/images/next_btn.png'></div>"]
    });
});
