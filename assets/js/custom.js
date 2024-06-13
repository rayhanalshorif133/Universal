$(document).ready(function () {

    handleOwlCarousel();
    commercialCleaningHandle();

    navBarToggler();

    handleGellary();
    exclusiveFeaturesContentBbox();




});

const exclusiveFeaturesContentBbox = () => {
    $(document).on('click', '.exclusive-features .content-box .item', function(){
        $(this).toggleClass('active');
    });
};


const handleGellary = () => {
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    })
};



const navBarToggler = () => {




    $(document).on('click', '.main-menu__toggle-menu', function (e) {
        $(".mobile-nav__wrapper").toggleClass("expanded");
    });

};


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
                "items": 1
            },
            "992": {
                "items": 1
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
                "items": 1
            },
            "520": {
                "items": 1.5
            },
            "600": {
                "items": 2
            },
            "768": {
                "items": 2.3
            },
            "992": {
                "items": 3
            },
            "1200": {
                "items": 3.66
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



    var SETPOINT = false;

    $(document).on('scroll', function (e) {

        const GET_Side_Line = $(".side-line").height();
        var topBar = $(this).scrollTop(); // Get the current scroll position
        topBar > 2806 ? topBar -= 2806 : topBar = 0;

        if (topBar > 0) {
            if (topBar > GET_Side_Line) {
                return false;
            }
            var setHeight = topBar + 'px';
            $(".side-line-green").css('height', setHeight);

            var count = $('.side-line-green').data('count');
            for (let index = 0; index < count; index++) {
                const ID = `item-${index}`;
                var divElement = document.getElementById(ID);
                var boundingRect = divElement.getBoundingClientRect();
                if (boundingRect.top < 464) {
                    $(`#item-${index}`).css('background-color', '#0BCBEF');
                    $(`#item-${index} i`).css('color', '#fff');
                    $(`#item-${index}`).addClass('active');
                } else {
                    $(`#item-${index}`).css('background-color', '#EEEEEE');
                    $(`#item-${index} i`).css('color', '#0BCBEF');
                    $(`#item-${index}`).removeClass('active');
                }

            }





        }



    });
};