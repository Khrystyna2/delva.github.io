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

    
});

