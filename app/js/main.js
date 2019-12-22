$(function () {

  $('.slider__items').slick({
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    autoplayspeed: 5000,
    fade: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        }
      },
    ]
  });

  $('.testimonial__slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
        }
      },
    ]
  });

  $(".portfolio__inner-box").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: "<img src='images/icons/slider-arrow-left.png' class='prev-arrow' alt='1'>",
    nextArrow: "<img src='images/icons/slider-arrow-right.png' class='next-arrow' alt='1'>",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          arrows: false,
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 716,
        settings: {
          slidesToShow: 2,
          centerPadding: '20px',
          centerMode: true,
          arrows: false,
        }
      },
      {
        breakpoint: 661,
        settings: {
          slidesToShow: 1,
          centerPadding: '20px',
          centerMode: true,
          arrows: false,
        }
      }
    ]
  });
  $('.portfolio__inner-btn .filter-btn').on('click', function () {
    $('.portfolio__inner-btn .filter-btn').removeClass('active');
    $(this).addClass('active');

    $('.portfolio__inner-box').slick('slickUnfilter');

    if ($(this).hasClass('category-design')) {
      $('.portfolio__inner-box').slick('slickFilter', $('.portfolio__item:not(.category-work)').closest('.slick-slide'));
    } else if ($(this).hasClass('category-work')) {
      $('.portfolio__inner-box').slick('slickFilter', $('.portfolio__item:not(.category-design)').closest('.slick-slide'));
    } else if ($(this).hasClass('all')) {
      $('.portfolio__inner-box').slick('slickUnfilter');
    }
  });

  $('.services-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.services__slider-nav'
  });
  $('.services__slider-nav').slick({
    slidesToShow: 6,
    arrows: false,
    vertical: true,
    focusOnSelect: true,
    asNavFor: '.services-slider',
    responsive: [
      {
        breakpoint: 1221,
        settings: {
          vertical: true,
          rows:1,

        }
      }
    ]
  });
  // //---------------------------------------adaptive menu
  $('.menu__btn').on('click', function () {
    $('.menu__list').slideToggle();
  });
  $('.header__btn-menu').on('click', function () {
    $('.header__box').toggleClass('active');
  });

  // ---------------------------------------anim adaptive btn menu
  $('.menu__btn').click(function (event) {
    $(this).toggleClass('active');
    $('.menu__list').toggleClass('active');
    if ($(this).hasClass('active')) {
      $('body').data('scroll', $(window).scrollTop());
    }
    $('body').toggleClass('lock');
    if (!$(this).hasClass('active')) {
      $('body,html').scrollTop(parseInt($('body').data('scroll')));
    }
  });

  $('.popup-video').magnificPopup({
    type: 'iframe'
  });

  // //---------------------------------------add/remove class
  //   $('.icon-th-list').on('click', function(){
  //     $('.product__item').addClass('list');
  //     $('.icon-th-list').addClass('active');
  //     $('.icon-th-large').removeClass('active');
  // });
  // $('.icon-th-large').on('click', function(){
  //     $('.product__item').removeClass('list');
  //     $('.icon-th-large').addClass('active');
  //     $('.icon-th-list').removeClass('active');
  // });


  // //---------------------------------------formstyler
  //   $('input[type="file"], select').styler();


  // //---------------------------------------animation
  //   wow = new WOW({
  //     boxClass: 'wow',
  //     animateClass: 'animated',
  //     offset: 0,
  //     mobile: false,
  //     live: true
  //   })
  //   wow.init();

  $('a[href^="#"]').on('click', function (event) {
    // отменяем стандартное действие
    event.preventDefault();

    var sc = $(this).attr("href"),
      dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */

    $('html, body').animate({ scrollTop: dn }, 1000);

    /*
    * 1000 скорость перехода в миллисекундах
    */
  });



// Маска ввода номера телефона (плагин maskedinput)
$(function ($) {
  $('[name="phone"]').mask("+7(999) 999-9999");

});
});





