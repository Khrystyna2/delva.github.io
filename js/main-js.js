$(document).ready(function() {

    $('#menu-dropDown>div').click(function() {
        $(this).next('ul').slideToggle();
        $('#menu-dropDown').toggleClass('rotate');
    });
    
    $('#search>button').click(function() {
        $('#search>input').addClass('open-input');  
    });

    $(document).mouseup(function (e) {
        var popup = $("#search>input");
        if (!$('#search>button').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
           popup.removeClass('open-input');
        }
    });

    //menu on mobile screen
    $('.btn-menu').click(function() {
       $('.menu').addClass('show-menu');
    });

    $('.btn-close').click(function() {
        $('.menu').removeClass('show-menu');
    });

    $('.slider-header').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1
    });

    $('.slider-index-page').slick({
            arrows: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1
    });

    // slider section proper-engraving
    $('.slider-proper-engraving').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav-proper-engraving'
      });
      $('.slider-nav-proper-engraving').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-proper-engraving',
        arrows: true,
        focusOnSelect: true
      });

    
});

