$(document).ready(function () {
    // style select
    $(function () {
        $('select').styler();
    });
    // catalog top filter
    $('.catgrid-links span').click(function () {
        $('.catgrid-links span').removeClass('active');
        $(this).addClass('active');
    });
    // event slider
    $('.event-slider').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
            
        ]
    });
    // responsive filter
    $('.left-filt .title').click(function(){
       $(this).next().slideToggle(); 
    });

});