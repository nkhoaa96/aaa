
$(document).ready(function(){
    var owl = $('.intergrate-carousel');
    owl.owlCarousel({
        loop:true,
        nav:true,
        items: 6,
        autoWidth:true,
        margin:50,
        dots:false,
        navText:["<div class='nav-btn prev-slide'><span class='icon-angle-left'></span></div>","<div class='nav-btn next-slide'><span class='icon-angle-right'></span></div>"]
    });

    var owls = $('.quote-carousel');
    owls.owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 1,
        dots:true,
        navText:["<div class='nav-btn prev-slide'><span class='icon-angle-left'></span></div>","<div class='nav-btn next-slide'><span class='icon-angle-right'></span></div>"]
    });

    $(window).on("resize", function() {
        var viewportWidth = $(window).width();
        if (viewportWidth <= 575) {
            $(".navbar-collapse").addClass("fixed-top sticky-top");
        } else {
            $(".navbar-collapse").removeClass("fixed-top sticky-top");
        }
    });
    $(document).ready(function() {
        var viewportWidth = $(window).width();
        if (viewportWidth <= 575) {
            $(".navbar-collapse").addClass("fixed-top sticky-top");
        } else {
            $(".navbar-collapse").removeClass("fixed-top sticky-top");
        }
    });
});
