$(document).ready(function () {
    $('.reviews-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: ["","next review"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    });

    $('.partners-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    });

    $(document).on('click', '.header__menu .scroll', function (event) {
        event.preventDefault();
        var href = $(this).attr('href');
        var target = $(href);
        var top = target.offset().top;
        $('html,body').animate({scrollTop: top}, 1000);
        return false;
    });
});