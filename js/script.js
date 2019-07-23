// Preloader

$(window).on('load', function () { // makes sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(500).fadeOut('slow');
});

// Team

$(function () {
    $('#team-members').owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            
            400: {
                items: 2
            }
        }
    });
});

// Progress bars 

$(function () {


    $('#progress-elements').waypoint(function () {
        $('.progress-bar').each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});

// Responsive tabs

$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});

// Portfolio

$(window).on('load', function () {

    // initialise isotope
    $('#isotope-container').isotope({});
    // filter items on button click
    $('#isotope-filters').on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio items
        $('#isotope-container').isotope({
            filter: filterValue
        });

        // active button
        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass('active');

    });

});

// Magnifier

$(function () {

    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});

// testimonials

$(function () {
    $('#testimonial-slider').owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

// stats

$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

// clients

$(function () {
    $('#clients-list').owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

// navigation

// show and hide white navigation
$(function () {

    showHideNav();

    $(window).scroll(function () {

        showHideNav();

    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            $('nav').addClass('white-nav-top');

            $('.navbar-brand img').attr('src', 'img/logo/logo-dark.png');

            $('#back-to-top').fadeIn();
        } else {
            $('nav').removeClass('white-nav-top');

            $('.navbar-brand img').attr('src', 'img/logo/logo.png');

            $('#back-to-top').fadeOut();
        }
    }

});

// smooth scrolling
$(function () {

    $('a.smooth-scroll').click(function (event) {

        event.preventDefault();

        // get section id e.g #about
        var section_id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, 'easeInOutExpo');

    });

});

/* =========================================
              Mobile Menu
============================================ */
$(function () {

    // Show mobile nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

});

/* =========================================
                Animation
============================================ */
// animate on scroll
$(function () {
    new WOW().init();
});

// home animation on page load
$(window).on('load', function () {

    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");

});