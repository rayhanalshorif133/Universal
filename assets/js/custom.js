$(document).ready(function () {

    handleOwlCarousel();
    commercialCleaningHandle();


});

const handleOwlCarousel = () => {
    const mainSlider = $(".main-slider").owlCarousel({
        "loop": true,
        "autoplay": true,
        "margin": 30,
        "nav": false,
        "dots": false,
        "smartSpeed": 500,
        "autoplayTimeout": 10000,
        "responsive": {
            "0": {
                "items": 1
            },
            "768": {
                "items": 1
            },
            "992": {
                "items": 1
            },
            "1200": {
                "items": 1
            }
        }
    });

    $(document).on("click", ".left-slider-btn", function (e) {
        mainSlider.trigger('prev.owl.carousel');
    });

    $(document).on("click", ".right-slider-btn", function (e) {
        mainSlider.trigger('next.owl.carousel');
    });




    const service_slider = $(".service-slider").owlCarousel({
        "loop": true,
        "autoplay": true,
        "margin": 30,
        "nav": false,
        "dots": false,
        "smartSpeed": 500,
        "autoplayTimeout": 10000,
        "responsive": {
            "0": {
                "items": 1
            },
            "768": {
                "items": 2
            },
            "992": {
                "items": 2
            },
            "1200": {
                "items": 2
            }
        }
    });

    $(document).on('click', '.services-left-slider', function () {
        service_slider.trigger('prev.owl.carousel');
    });

    $(document).on('click', '.services-right-slider', function () {
        service_slider.trigger('next.owl.carousel');
    });


    const teamSlider = $(".team-slider").owlCarousel({
        "loop": true,
        "autoplay": true,
        "margin": 30,
        "nav": false,
        "dots": false,
        "smartSpeed": 500,
        "autoplayTimeout": 10000,
        "responsive": {
            "0": {
                "items": 2
            },
            "768": {
                "items": 2
            },
            "992": {
                "items": 3
            },
            "1200": {
                "items": 3.666666
            }
        }
    });

    $(document).on('click', '.team-left-btn', function () {
        teamSlider.trigger('prev.owl.carousel');
    });

    $(document).on('click', '.team-right-btn', function () {
        teamSlider.trigger('next.owl.carousel');
    });
};

const commercialCleaningHandle = () => {

    var counter = 0;

    var lastScrollTop = 0; // Variable to store the last scroll position

    $(document).on('scroll', function (e) {

        var topBar = $(this).scrollTop(); // Get the current scroll position
        topBar > 2806 ? topBar -= 2806 : topBar = 0;
        
        if(topBar < 2136){
            var setHeight = topBar + 'px';
            $(".side-line-green").css('height', setHeight);
        }

       
    });

    console.log('hello')
    // get screen size
    const screenHeight = window.innerHeight;
    const middleOfHeight = screenHeight / 2;
    // $(".side-line")
    console.log(middleOfHeight)
    var offset = $(".side-line").offset();
    var main_header = $(".main-header").offset();
    var heightFromTop = offset.top;
    var main_header_top = main_header.top;
    console.log(heightFromTop, main_header_top)
};