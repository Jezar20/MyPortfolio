(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    

    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    // var portfolioIsotope = $('.portfolio-container').isotope({
    //     itemSelector: '.portfolio-item',
    //     layoutMode: 'fitRows'
    // });
    // $('#portfolio-flters li').on('click', function () {
    //     $("#portfolio-flters li").removeClass('active');
    //     $(this).addClass('active');

    //     portfolioIsotope.isotope({filter: $(this).data('filter')});
    // });

// Certificates Isotope and filter UNCOMMENT FOR ALL CERTIFICATES
    // var certificatesIsotope = $('.certificates-container').isotope({
    //     itemSelector: '.portfolio-item',
    //     layoutMode: 'fitRows'
    // });
    var certificatesIsotope = $('.certificates-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
        filter: '.first' // Set the default filter to "first"
    });
    
    // Add the 'active' class to the "first" tab by default
    $('#portfolio-flters-certificates li[data-filter=".first"]').addClass('active');

    $('#portfolio-flters-certificates li').on('click', function () {
        $("#portfolio-flters-certificates li").removeClass('active');
        $(this).addClass('active');

        certificatesIsotope.isotope({filter: $(this).data('filter')});
    });

    // Projects Isotope and filter UNCOMMENT FOR ALL PROJECTS
    // var projectsIsotope = $('.projects-container').isotope({
    //     itemSelector: '.portfolio-item',
    //     layoutMode: 'fitRows'
    // });

    var projectsIsotope = $('.projects-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
        filter: '.fifth' // Set the default filter to "fifth"
    });

    // Add the 'active' class to the "fifth" tab by default
    $('#portfolio-flters-projects li[data-filter=".fifth"]').addClass('active');

    $('#portfolio-flters-projects li').on('click', function () {
        $("#portfolio-flters-projects li").removeClass('active');
        $(this).addClass('active');

        projectsIsotope.isotope({filter: $(this).data('filter')});
    });



    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });

    
})(jQuery);

