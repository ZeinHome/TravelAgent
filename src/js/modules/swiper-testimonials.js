import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperCardTestiomonials() {
  const swiper = new Swiper('.testimonials__col--one', {
    direction: 'vertical',
    slidesPerView: 'auto',
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
  });
}

export default swiperCardTestiomonials;
