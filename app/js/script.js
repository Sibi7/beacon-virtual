$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
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
    })
});