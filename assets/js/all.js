"use strict";

(function ($) {
  var preload = function preload() {
    //loading
    if ($('.home').length) {
      setTimeout(function () {
        $('.loading').addClass('is-loaded');
        setTimeout(function () {
          AOS.init({
            once: true
          });
        }, 1000);
      }, 2500);
    } else {
      AOS.init({
        once: true
      });
    }
  };

  var openMenu = function openMenu() {
    // 點擊漢堡選單顯示nav
    $('.burger').on('click', function () {
      $('.mobile-nav').toggleClass('is-active');
      $('.burger').toggleClass('is-active');
    });
  };

  var goSwiper = function goSwiper() {
    var courseSwiper = new Swiper('.course .swiper', {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
      autoplay: {
        // 自動撥放
        delay: 3000,
        disableOnInteraction: false // 用手操控swiper後一樣會自動輪播

      }
    });
    var commentsSwiper = new Swiper('.comments .swiper', {
      slidesPerView: 1,
      spaceBetween: 0,
      grid: {
        rows: 3,
        fill: 'column'
      },
      navigation: {
        prevEl: '.btn-prev',
        nextEl: '.btn-next'
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          grid: {
            rows: 2,
            fill: 'row'
          }
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
          grid: {
            rows: 2,
            fill: 'row'
          }
        }
      }
    });
    var lineUpSwiper = new Swiper('.line-up .swiper', {
      loop: true,
      slidesPerView: '1',
      spaceBetween: 30,
      autoplay: {
        // 自動撥放
        delay: 3000,
        disableOnInteraction: false // 用手操控swiper後一樣會自動輪播

      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        }
      }
    });
    var levelSwiper = new Swiper('.level .swiper', {
      slidesPerView: '1',
      spaceBetween: 30,
      grid: {
        rows: 3,
        fill: 'column'
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          grid: {
            rows: 1,
            fill: 'row'
          }
        },
        992: {
          slidesPerView: 2,
          grid: {
            rows: 1,
            fill: 'row'
          }
        },
        1200: {
          slidesPerView: 3,
          grid: {
            rows: 1,
            fill: 'row'
          }
        }
      }
    });
    var recommendSwiper = new Swiper('.recommend .swiper', {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
      autoplay: {
        // 自動撥放
        delay: 3000,
        disableOnInteraction: false // 用手操控swiper後一樣會自動輪播

      },
      breakpoints: {
        768: {
          slidesPerView: 3
        },
        992: {
          slidesPerView: 'auto'
        }
      }
    });
  };

  var gochoose = function gochoose() {
    var index = 0;
    $('.project__item').on('click', function () {
      index = $(this).index();
      $('.project__content').removeClass('is-active');
      $('.project__content').eq(index).addClass('is-active');
      $('.project__card').removeClass('is-active');
      $('.project__card').eq(index).addClass('is-active');
      $('.level').addClass('is-active');
      $('.precautions a').addClass('is-active');
      $('.precautions__title').addClass('is-active');
    });
  };

  var goLevel = function goLevel() {
    var index = 0;
    $('.level__item').on('click', function () {
      index = $(this).index();
      $('.level__item').removeClass('is-active');
      $('.level__item').eq(index).addClass('is-active');
    }); // 判斷點擊哪一個level顯示對應文字

    var levelItem = document.querySelectorAll('.level__item');
    var precautionsTxt = document.querySelector('.precautions__txt');

    if (precautionsTxt) {
      precautionsTxt.textContent = '';
      levelItem.forEach(function (item) {
        item.addEventListener('click', function (e) {
          precautionsTxt.textContent = e.currentTarget.dataset.level;
        });
      });
    }
  };

  var goDate = function goDate() {
    var elem = document.querySelector('input[name="datepicker"]');

    if (elem) {
      var datepicker = new Datepicker(elem, {
        autohide: true,
        nextArrow: '>',
        prevArrow: '<',
        buttonClass: 'btn primary'
      });
    }
  };

  var goModal = function goModal() {
    $('.modal-open').on('click', function () {
      $('.modal').addClass('is-active');
      $('body').addClass('overflow-hidden');
    });
    $('.modal').on('click', function () {
      $('.modal').removeClass('is-active');
      $('body').removeClass('overflow-hidden');
    });
  };

  var goReservationInfo = function goReservationInfo() {
    $('.reservation__title').on('click', function () {
      $('.reservation__info').slideToggle();
      $('.reservation__title i').toggleClass('is-active');
    });
  };

  $(function () {
    openMenu();
    goSwiper();
    gochoose();
    goLevel();
    goDate();
    goModal();
    goReservationInfo();
  });
  $(window).on('load', function () {
    preload();
  });
})(jQuery);
//# sourceMappingURL=all.js.map
