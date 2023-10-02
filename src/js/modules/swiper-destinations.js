import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperCard() {
  const swiper = new Swiper('.swiper-destinations', {
    slidesPerView: 1,
    spaceBetween: 32,
    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },

    breakpoints: {
      425: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
    },
  });
}

export default swiperCard;
