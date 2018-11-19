$(document).ready(function () {
    // style select
    $(function () {
        $('select, input[type="number"], .check-block input').styler();
    });

    $('.colorsel .select-color').click(function () {
        $('.choose-colors-block').toggle();
    });
    $(".choose-colors-block span").click(function() {
        var title = $(this).find(".titlesel").html();
        $(".colorsel .select-color").html(title);
        $('.choose-colors-block').hide();

    });


    // catalog top filter
    $('.catgrid-links span').click(function () {
        $('.catgrid-links span').removeClass('active');
        $(this).addClass('active');
    });
    $('.row-gr').click(function () {
        $('.catalog-products').addClass('rowproducts')
    });
    $('.table-gr').click(function () {
        $('.catalog-products').removeClass('rowproducts')
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
    $('.left-filt .title').click(function () {
        $(this).next().slideToggle();
    });
    // footer sitemap
    if ($(window).width() < 768) {
        $('footer .foot-sitemap p.title').click(function () {
            $(this).toggleClass('rotatepic')
            $('.foot-sitemap ul').slideToggle();
        })
    }
    //  product slider
    // event slider
    $('.card-slider').slick({
        arrows: false,
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.bottom-prslider').slick({
        arrows: true,
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});