
$(document).ready(function(){



    $("#reg-btn").click(function() {
        $('html,body').animate({
                scrollTop: $(".register-form").offset().top},
            'slow');
    });

    $("#btn-reg-form").click(function() {
        var city = $('#city_input').val();
        var name = $('#name_input').val();
        var phone = $('#phone_input').val();
        var email = $('#email_input').val();
        var dob = $('#dob_input').val();
        var school = $('#school_input').val();
        var degree = $('#degree_input').val();
        var position = $('#position_input').val();
        var time = $('#time_input').val();

        // $.ajax({
        //     url: "https://docs.google.com/forms/d/e/1FAIpQLSdJljvIGoZeCy5ygcQxydobfQsGVMFofLI6Dx0EgHsxY9SNcQ/formResponse",
        //     data: {
        //         "entry.1933655525": city,
        //         "entry.687732027": 'Học sinh',
        //         "entry.1038123465": name,
        //         "entry.1158557545": phone,
        //         "entry.122496775": email,
        //         "entry.1833542224": dob,
        //         "entry.949263201": school,
        //         "entry.679562446.other_option_response": time,
        //         "entry.679562446": '__other_option__',
        //         "entry.1349331485.other_option_response": degree,
        //         "entry.1349331485": '__other_option__',
        //         "entry.606944087.other_option_response": position,
        //         'entry.606944087': '__other_option__',
        //         "entry.325236156": 'Website AAE Vietnam',
        //         'fvv': 1,
        //     },
        //     crossDomain : true,
        //     type: "POST",
        //     dataType: "xml",
        //     statusCode: {
        //         200: function () {
        //             console.log('success');
        //         }
        //     }
        // });
        $("#ex1").modal({
            fadeDuration: 100
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
