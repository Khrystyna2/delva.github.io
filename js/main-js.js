$(document).ready(function() {

    $('#menu-dropDown>div').click(function() {
        $(this).next('ul').slideToggle();
        $('#menu-dropDown').toggleClass('rotate');
    });
    
    // search input
    if ($(window).width() >= 768) {
        $('#search>button').click(function() {
            $('#search>input').addClass('open-input');  
        });
    
        $(document).mouseup(function (e) {
            var popup = $("#search>input");
            if (!$('#search>button').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
               popup.removeClass('open-input');
            }
        });
    }

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
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 767.8,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
    });

    // slider section proper-engraving
    $('.slider-proper-engraving').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav-proper-engraving',
        responsive: [
          {
            breakpoint: 500,
            settings: {
              arrows: true
            }
          }
        ]
      });
      $('.slider-nav-proper-engraving').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-proper-engraving',
        arrows: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
      });

      $('#selfCheckout').on('click', function() {
        $('#newPostOpen').hide();
        $('#selfCheckoutOpen').show();
      });

      $('#newPost').on('click', function() {
        $('#selfCheckoutOpen').hide();
        $('#newPostOpen').show();
      });

      //show form new post
      if ($("#newPostCourier, #newPostDepartment").is(":checked")) {
        $('#newPostCourierOpen, #newPostDepartment').show();
      }

      $("#newPostDepartment, #newPostCourier").change(function () {
        $('#newPostDepartmentOpen, #newPostCourierOpen').hide();
        if ($("#newPostCourier").is(":checked")) {
          $('#newPostCourierOpen').show();
        }
        else if ($("#newPostDepartment").is(":checked"))
          $('#newPostDepartmentOpen').show();
      });  

});

function showPassword() {
  var x = document.getElementById("passwordPersonalInfo");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}