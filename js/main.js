(function ($) {
    "use strict";

    // preloader
    $(window).on('load', function () {
        // ------- Prealoder ------
        $("#preloader").delay(300).fadeOut("slow");
    });


    // back-to-top btn
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').addClass("topbtn_hide");
        } else {
            $('.back-to-top').removeClass("topbtn_hide");
        }
    });
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    $(document).ready(function () {


        // toggle Menu
        $(".hamburger_btn").on('click', function () {
            $(this).toggleClass("active");
            $(".site_header").toggleClass("menu_toggled");
            $('body').toggleClass("overflow-hidden");
        });

        // site_header scroll start //
        function checkScroll() {
            if ($(window).scrollTop() >= 50) {
                $('.site_header').addClass('menu_scrolled');
            } else {
                $('.site_header').removeClass('menu_scrolled');
            }
        }

        // Check the scroll position when the page loads
        checkScroll();

        // Check the scroll position when the page is scrolled
        $(window).on('scroll', function () {
            checkScroll();
        });
        // site_header scroll end //


        // marquee js
        $('.marquee').marquee({
            duration: 20000,
            duplicated: true,
            pauseOnHover: false,
            gap: 0,
            startVisible: true,
            delayBeforeStart: 0,
        });

        // magnificPopup
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });

    });
})(jQuery);