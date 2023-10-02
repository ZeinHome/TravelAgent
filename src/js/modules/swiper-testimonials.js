import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let swiper, swiperHorizontal;

const breakpoints = window.matchMedia('(max-width: 1023px)');

const breakpointsChecker = function () {
  if (breakpoints.matches === true) {
    swiperHorizontal = new Swiper('.testimonials__col--horiontal', {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 32,
      grabCursor: true,
      a11y: false,
      freeMode: true,
      speed: 2000,
      loop: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },

      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
    });

    if (swiper !== undefined) swiper.destroy(true, true);

    return;
  }

  swiper = new Swiper('.testimonials__col--one', {
    direction: 'vertical',
    slidesPerView: 'auto',
    spaceBetween: 0,
    grabCursor: true,
    a11y: false,
    freeMode: true,
    speed: 2000,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });

  if (swiperHorizontal !== undefined) swiperHorizontal.destroy(true, true);

  return;
};

breakpoints.addListener(breakpointsChecker);

export default breakpointsChecker;
