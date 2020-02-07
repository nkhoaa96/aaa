
$(document).ready(function(){



    // $("#reg-btn").click(function() {
    //     $(".img-move").addClass('display_none');
    //     $('html,body').animate({
    //             scrollTop: $(".section-register").offset().top},
    //         'slow');
    // });

    $("#btn-reg-form").click(function() {
        var city = $('#city_input').val();
        var name = $('#name_input').val();
        var phone = $('#phone_input').val();
        var email = $('#email_input').val();

        $.ajax({
            url: "https://docs.google.com/forms/d/e/1FAIpQLScnRbnsHKY3Umrj_pzEFHJMYNsoUBU2Z8jy7H5cmUcdkVF4gg/formResponse",
            data: {
                "entry.857326020": city,
                "entry.1091257351": name,
                "entry.866888737": phone,
                "entry.1655299612": email,
            },
            type: "POST",
            dataType: "xml",
            statusCode: {
                200: function () {
                    $("#ex1").modal({
                        fadeDuration: 100
                    });
                }
            }
        });

    });

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
