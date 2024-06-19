$(document).ready(function () {

    handleOwlCarousel();
    commercialCleaningHandle();

    navBarToggler();

    handleGellary();
    exclusiveFeaturesContentBbox();
    counterHandler();




});

const counterHandler = () => {
    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];

    for (i = 0; i < countersQuantity; i++) {
        counter[i] = {
            "count" : parseInt(counters[i].innerHTML),
            "speed" :$(counters[i]).data('speed')
        }
        
    }


    var count = function (start, value,speed, id) {
        var localStart = start;
        setInterval(function () {
            if (localStart < value) {
                localStart++;
                counters[id].innerHTML = localStart;
            }
        }, speed);
    }

    for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j].count,counter[j].speed, j);
    }
};

const exclusiveFeaturesContentBbox = () => {
    $(document).on('click', '.exclusive-features .content-box .item', function () {
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




    $(document).on('scroll', function (e) {

        const GET_Side_Line = $(".side-line").height();
        const current_width = $(document).width();
        const current_Height = $(document).height();
        // console.log(checkbox)
        // if checkbox is not visible



        var topBar = $(this).scrollTop(); // Get the current scroll position

        // 320px 480px
        console.log(current_width)

        var SETGREEN_LINE_POSITION = 0;

        if (current_width == 320) {
            topBar > 2619 ? topBar -= 2619 : topBar = 0;
            SETGREEN_LINE_POSITION = 310;
        } else if (current_width > 374 && current_width < 426) {
            topBar > 2649 ? topBar -= 2649 : topBar = 0;
            SETGREEN_LINE_POSITION = 190;
        } else if (current_width == 779) {
            topBar > 2400 ? topBar -= 2400 : topBar = 0;
            SETGREEN_LINE_POSITION = 250;
        } else if (current_width > 1024) {
            console.log(topBar, "topBar")
            topBar > 2513 ? topBar -= 2513 : topBar = 0;
            SETGREEN_LINE_POSITION = 190;
        }

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
                if (boundingRect.top < SETGREEN_LINE_POSITION) {
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