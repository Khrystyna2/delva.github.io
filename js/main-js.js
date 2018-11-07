$(document).ready(function() {

   $('#menu-dropDown>div').click(function() {
        $(this).next('ul').slideToggle();
        $('#menu-dropDown').toggleClass('rotate');
   });
  
    $('#search>img').click(function() {
        $('#search>input').toggleClass('open-input');  
    });

    $('.btn-menu').click(function() {
        $('.menu').addClass('show-menu');
   });

   $('.btn-close').click(function() {
        $('.menu').removeClass('show-menu');
   });

    
});

