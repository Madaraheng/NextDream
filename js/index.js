/*global $, jquery, console, alert*/
$(document).ready(function () {
    "use strict";
    // Change Color Links
    $('nav .navbar-nav .nav-item').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });

    // Adjust Height Slider
    $('#mySlider .carousel-item').height($(window).height());
    $(window).resize(function () {
        $('#mySlider .carousel-item').height($(window).height());
    });


    // Trigger Carousel
    $('.carousel').carousel({
        interval: 20000,
        pause : 'hover'
    });

    // Feature Header
    $('.feature .row .box .media .media-body h5').on('mouseenter', function () {
        $(this).parent().parent().siblings().children().css({
            backgroundColor: '#f2545f',
            borderColor: '#f2545f',
            color: '#FFF'
        });
    });

    $('.feature .row .box .media .media-body h5').on('mouseleave', function () {
        $(this).parent().parent().siblings().children().css({
            backgroundColor: '#F9F9F9',
            borderColor: '#F9F9F9',
            color: '#f2545f'
        });
    });

    // Smooth Scrolling

    $('nav .navbar-nav .nav-item .home').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });

    $('nav .navbar-nav .nav-item .nav-link').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).data('target')).offset().top
        }, 1500);
    });

    // Go To Top
    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= ($('.about').offset().top) - 350) {
            $('.top .fa').fadeIn();
        } else {
            $('.top .fa').fadeOut();
        }
    });

    $('.top .fa').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });

    // loading
    $(window).on('load', function () {
        $('.loading').fadeOut(500, function () {
            $('.loading').remove();
        });
    });

    // Nice Scroll
    $('body').niceScroll({
        cursorcolor: '#f2545f',
        cursorwidth: "8px",
        cursorborder: "1px solid #f2545f"
    });

    // Trigger WOW
    new WOW().init();

});
