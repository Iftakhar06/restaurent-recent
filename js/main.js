(function ($) {
"use strict";

$(window).on("load", function () {
    /*-- Preloader-Fade-Out-After-Load-Window --*/
    $('.preloader').fadeOut(500);
    $('body').append('<a href="#" id="scrollUp"></a>');
    $('#scrollUp').on('click',function() {
        $('body,html').animate({
            scrollTop : 0
        }, 500);
        return false;
    });
    
    /*-- WoW-Animation-JS --*/
    // new WOW().init({
    //     mobile: false,
    // });
}); 

$('.slider-events').slick({
    dots: false,
    arrows: false,
    prevArrow: '<button class="slick-prev"  type="button"><i class="fas fa-chevron-right"></i></button>',
    nextArrow: '<button class="slick-next" type="button"><i class="fas fa-chevron-left"></i></button>',
    infinite: true,
    centerMode: false,
    autoplay: true,
    vertical: false,
    verticalSwiping: false,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1170,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  });

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button class="slick-prev"  type="button"><i class="fas fa-chevron-right"></i></button>',
  nextArrow: '<button class="slick-next" type="button"><i class="fas fa-chevron-left"></i></button>',
  asNavFor: '.slider-for',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true,
  autoplay: true,
  centerPadding: '300px',
  responsive: [
      {
    breakpoint: 1200,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '250px',
      slidesToShow: 1

    }
  },
  {
    breakpoint: 992,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '200px',
      slidesToShow: 1,
    }
  },
  {
    breakpoint: 768,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '15px',
      slidesToShow: 1
    }
  }
]
});


$('.slider-active').slick({
  dots: false,
  arrows: true,
  prevArrow: '<button class="slick-prev"  type="button"><i class="fas fa-chevron-right"></i></button>',
  nextArrow: '<button class="slick-next" type="button"><i class="fas fa-chevron-left"></i></button>',
  infinite: true,
  centerMode: false,
  autoplay: true,
  parallax: true,
  vertical: false,
  verticalSwiping: false,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
      {
          breakpoint: 1170,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
});

$('.slider-restaurant').slick({
    dots: false,
    arrows: true,
    prevArrow: '<button class="slick-prev"  type="button"><i class="fas fa-chevron-right"></i></button>',
    nextArrow: '<button class="slick-next" type="button"><i class="fas fa-chevron-left"></i></button>',
    infinite: true,
    centerMode: false,
    autoplay: false,
    vertical: false,
    verticalSwiping: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1170,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  });

  $('.slider-restaurant2').slick({
    dots: false,
    arrows: true,
    prevArrow: '<button class="slick-prev"  type="button"><i class="fas fa-chevron-right"></i></button>',
    nextArrow: '<button class="slick-next" type="button"><i class="fas fa-chevron-left"></i></button>',
    infinite: true,
    centerMode: false,
    autoplay: false,
    vertical: false,
    verticalSwiping: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1170,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  });


$('.slider-dishes').slick({
  dots: false,
  arrows: true,
  prevArrow: '<button class="slick-prev"  type="button"><i class="fas fa-chevron-right"></i></button>',
  nextArrow: '<button class="slick-next" type="button"><i class="fas fa-chevron-left"></i></button>',
  infinite: true,
  centerMode: false,
  autoplay: true,
  vertical: false,
  verticalSwiping: false,
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
      {
          breakpoint: 1170,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
});

// parallax 2
var $el = $('.parallax-bg');
$(window).on('scroll', function () {
    var scroll = $(document).scrollTop();
    $el.css({
        'background-position':'50% '+(+.4*scroll)+'px'
    });
});  

// one-page-nav active code
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
    currentClass: 'active',
    scrolloffset: top_offset,
});

// // Scroll To Top
const btnScrollToTop = document.querySelector('#btnScrollToTop');
btnScrollToTop.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// TOP Menu Sticky code
 $(window).on('scroll',function() {
    if ($(this).scrollTop() > 150){  
        $('#sticky-header').addClass("sticky");
    }
    else{
        $('#sticky-header').removeClass("sticky");
    }
}); 

/*-- Mobile-Menu-Active --*/
$('.primary-menu').slicknav({
    label: '',
    duration: 500,
    prependTo: '',
    closedSymbol: '<i class="fa fa-angle-right"></i>',
    openedSymbol: '<i class="fa fa-angle-right"></i>',
    appendTo: '.mainmenu-area',
    menuButton: '.navi-trigger',
    closeOnClick: 'true' // Close menu when a link is clicked.
    });
    $('.navi-trigger').on('click',function(){
        $(this).toggleClass('active');
    }); 
    
/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
  gallery: {
    // options for gallery
    enabled: true
  },
});

// Input datepicker Calender
$( "#datepicker" ).datepicker();

})(jQuery);


